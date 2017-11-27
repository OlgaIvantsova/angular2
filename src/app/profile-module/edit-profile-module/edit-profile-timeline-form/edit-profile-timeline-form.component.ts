import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { endYearValidation } from './end-year-validation';

import { Employee } from 'shared/models/employee-model';
import { TimelineInfo } from './timeline-model';

import { ConfirmService } from 'shared/confirm/confirm.service';

@Component({
    selector: 'edit-profile-timeline-form',
    templateUrl: 'edit-profile-timeline-form.component.html'
})

export class EditProfileTimelineFormComponent implements OnInit{
    @Input() tabName: string;
    @Input() employee: Employee;
    @Output() onCancel = new EventEmitter();
    @Output() employeeToUpdate = new EventEmitter<Employee>();
    form: FormGroup;
    addForm: FormGroup;
    fieldSets: TimelineInfo[] = [];
    yearsArr: number[] = [];
    isAddFormOpen: boolean = false;

    constructor(
        private fb: FormBuilder,
        private _confirmService: ConfirmService
    ) {}

    ngOnInit() {
        this.setYearsArr();
        this.setFieldSets();

        this.setFormGroups();
    }

    closeAddForm() {
        this.isAddFormOpen = false;
    }

    openAddForm() {
        this.isAddFormOpen = true;
    }

    setYearsArr() {
        for(let i = 1995; i<= new Date().getFullYear(); i++) {
            this.yearsArr.push(i);
        }
    }

    setFieldSets() {
        this.fieldSets= this.employee[this.tabName].slice().map( (item: any) => {
            item.title = item.position? item.position: item.qualification;
            item.organization = item.enterprise? item.enterprise: item.university;
            return item;
        });
    }

    setFormGroups() {
        let group: any = {};

        this.fieldSets.forEach( (item: any) => {
            group[item.organization] = this.fb.group({
                title: [ item.title, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
                organization: [ item.organization, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
                description: [ item.description, [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
                startYear: [ item.startYear, [Validators.required]],
                endYear: [ item.endYear, [Validators.required]]
            }, { validator: endYearValidation });
        });
        this.form = this.fb.group(group);
    }

    remove(record: TimelineInfo) {
        this.showConfirmDialog('Do you really want to remove the record?')
            .then( (result) => {
                if(result) {
                    this.fieldSets = this.fieldSets.filter( (item: TimelineInfo) => { //update DOM
                        return item.organization !== record.organization;
                    });

                    this.form.removeControl(record.organization);
                    this.form.markAsDirty();
                }
            });
    }

    addRecord(record: TimelineInfo) {
        //     this.addForm.reset();
        this.closeAddForm();
        this.fieldSets.push(record);
        this.setFormGroups();

        this.form.markAsDirty();
    }

    gatherFieldSets(value: TimelineInfo[]) {
        let fieldSets: TimelineInfo[] = [];
        let category = this.tabName;
        for(let key in value) {
            fieldSets.push(value[key]);
        }

        fieldSets.forEach( (item: any) => {
            if(category === 'educations') {
                item.university = item.organization;
                item.qualification = item.title;
            }
            if(category === 'works') {
                item.enterprise = item.organization;
                item.position = item.title;
            }
            delete item.organization;
            delete item.title;
        });
        return fieldSets;
    }

    cancelValidation(form: FormGroup, fieldTitle: string) {
        form.get(fieldTitle).markAsUntouched();
    }

    onSubmit({ value, valid }: { value: TimelineInfo[], valid: boolean }) {
        if(!valid) {
            for(let key in this.form.controls) {
                this.form.controls[key].markAsTouched();// this shows validation notification
            }
            return;
        }

        this.employee[this.tabName] = this.gatherFieldSets(value);

        this.form.reset();
        this.fieldSets = [];
        this.employeeToUpdate.emit(this.employee);
    }

    cancel() {
        if(this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then( (result) => {
                    if(result) {
                        this.form.reset();
                        this.fieldSets = [];
                        this.onCancel.emit();
                    }
                });
        } else {
            this.form.reset();
            this.fieldSets = [];
            this.onCancel.emit();
        }
    }

    showConfirmDialog(message: string): Promise<boolean> {
        return this._confirmService.activate(message);
    }

}