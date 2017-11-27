import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { SkillLevel } from 'shared/levels/skills-level-enum';
import { LanguageLevel } from 'shared/levels/language-level-enum';
import { Language } from 'shared/models/language-model';
import { Tool } from 'shared/models/tool-model';
import { Employee } from 'shared/models/employee-model';

import { ConfirmService } from 'shared/confirm/confirm.service';
import { AlertPopupService } from 'shared/alert-popup/alert-popup.service';

class LevelsInfo {
    title: string = '';
    level: string = '';
}

@Component({
    selector: 'edit-profile-levels-form',
    templateUrl: 'edit-profile-levels-form.component.html'
})

export class EditProfileLevelsFormComponent implements OnInit{
    @Input() tabName: string;
    @Input() employee: Employee;
    @Output() onCancel = new EventEmitter();
    @Output() employeeToUpdate = new EventEmitter<Employee>();
    form: FormGroup;
    addForm: FormGroup;
    levels: string[] = [];
    selectFields: LevelsInfo[] = [];

    constructor(
        private fb: FormBuilder,
        private _confirmService: ConfirmService,
        private _alertPopupService: AlertPopupService
    ) {}

    ngOnInit() {
        this.setLevels();
        this.selectFields = this.employee[this.tabName].concat();

        this.setFormGroups();
    }

    setFormGroups() {
        let group: any = {};

        this.selectFields.forEach( (item: any) => {
            group[item.title] = this.fb.group({
                title: [ item.title, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
                level: [ item.level, [Validators.required]]
            });
        });
        this.form = this.fb.group(group);

        this.addForm = this.fb.group({
            title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
            level: ['', [Validators.required]]
        });
    }

    remove(record: LevelsInfo) {
        this.showConfirmDialog('Do you really want to remove the record?')
            .then( (result) => {
                if(result) {
                    this.selectFields = this.selectFields.filter( (item: Tool|Language) => { //update DOM
                        return item.title !== record.title;
                    });

                    this.form.removeControl(record.title);
                    this.form.markAsDirty();
                }
            });
    }

    add({ value, valid }: { value: LevelsInfo, valid: boolean }) {
        if(!valid) {
            for(let key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched();// this shows validation notification
            }
            return;
        }

        let isPresent = this.selectFields.find( item => {
            return this.addForm.value.title === item.title;
        });
        if(isPresent) {
            this.showNotification('The record with the same title already exists!')
                .then( () => {});
        } else {
            this.selectFields.push(this.addForm.value);

            let newTitle = this.addForm.get('title').value;
            let newLevel = this.addForm.get('level').value;

            this.form.addControl(newTitle, new FormGroup({
                title: new FormControl(newTitle, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]),
                level: new FormControl(newLevel, Validators.required)
            }));

            this.addForm.reset();
            this.form.markAsDirty();
        }
    }

    setLevels() {
        if(this.tabName === 'tools') {
            for(let prop in SkillLevel) {
                if(parseInt(prop)) continue;
                this.levels.push(prop);
            }
        }
        if(this.tabName === 'languages') {
            for(let prop in LanguageLevel) {
                if(parseInt(prop)) continue;
                this.levels.push(prop);
            }
        }
    }

    cancelValidation(form: FormGroup, fieldTitle: string) {
        form.get(fieldTitle).markAsUntouched();
    }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        if(!valid) {
            for(let key in this.form.controls) {
                this.form.controls[key].markAsTouched();// this shows validation notification
            }
            return;
        }

        let result: LevelsInfo[] = [];
        for(let key in value) {
            result.push(value[key]);
        }
        this.employee[this.tabName] = result;
        this.form.reset();
        this.selectFields = [];
        this.employeeToUpdate.emit(this.employee);
    }

    cancel() {
        if(this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then( (result) => {
                    if(result) {
                        this.form.reset();
                        this.selectFields = [];
                        this.onCancel.emit();
                    }
                });
        } else {
            this.form.reset();
            this.selectFields = [];
            this.onCancel.emit();
        }
    }

    showConfirmDialog(message: string): Promise<boolean> {
        return this._confirmService.activate(message);
    }

    showNotification(message: string): Promise<boolean> {
        return this._alertPopupService.activate(message);
    }

}