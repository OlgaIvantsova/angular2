import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee } from 'shared/models/employee-model';

import { EmployeesService } from 'shared/employees.service';
import { ConfirmService } from 'shared/confirm/confirm.service';
import { AlertPopupService } from 'shared/alert-popup/alert-popup.service';

@Component({
    selector: 'edit-profile-direction-form',
    templateUrl: 'edit-profile-direction-form.component.html'
})

export class EditProfileDirectionComponent implements OnInit{
    @Input() employee: Employee;
    @Input() tabName: string;
    @Output() onCancel = new EventEmitter();
    @Output() employeeToUpdate = new EventEmitter<Employee>();
    form: FormGroup;
    addForm: FormGroup;
    directions: string[] = [];
    allDirections: string[] = [];

    constructor(
        private fb: FormBuilder,
        private _confirmService: ConfirmService,
        private _alertPopupService: AlertPopupService,
        private _employeesService: EmployeesService
    ) {}

    ngOnInit() {
        this.directions = this.employee[this.tabName].slice();
        this.getAllDirections();

        this.setFormGroups();
    }

    getAllDirections() {
        this._employeesService.getSubCategories('directions')
            .subscribe( items => {
                this.allDirections = items;
            });
    }

    setFormGroups() {
        let group: any = {};

        this.directions.forEach( (item: string) => {
            group[item] = [ item, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]]

        });
        this.form = this.fb.group(group);

        this.addForm = this.fb.group({
            selectTitle: ['', [Validators.minLength(2), Validators.maxLength(32)]],
            textTitle: ['', [Validators.minLength(2), Validators.maxLength(32)]]
        });
    }

    cancelValidation(form: FormGroup, fieldTitle: string) {
        form.get(fieldTitle).markAsUntouched();
    }

    add({ value, valid }: { value: any, valid: boolean }) {
        if(!value.selectTitle && !value.textTitle || value.selectTitle && value.textTitle) {
            return this.showNotification('Choose one from available direction or add new one!');
        }
        if(!valid) {
            for(let key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched();// this shows validation notification
            }
            return;
        }
        if(valid) {
            let newItem = value.selectTitle ? value.selectTitle : value.textTitle;
            let index = this.directions.indexOf(newItem.toLowerCase());
            if(index !== -1) {
                return this.showNotification('This direction already exists!');
            }
            this.directions.push(newItem);
            this.setFormGroups();
            this.form.markAsDirty();
            this.addForm.reset();
        }
    }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        this.employee[this.tabName] = this.directions;

        this.form.reset();
        this.directions = [];
        this.employeeToUpdate.emit(this.employee);
    }

    remove(direction: string) {
        this.showConfirmDialog('Do you really want to remove the direction?')
            .then( (result) => {
                if(result) {
                    let index = this.directions.indexOf(direction);
                    this.directions.splice(index, 1);
                    this.form.removeControl(direction);
                    this.form.markAsDirty();
                }
            });
    }

    cancel() {
        if(this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then( (result) => {
                    if(result) {
                        this.form.reset();
                        this.directions = [];
                        this.onCancel.emit();
                    }
                });
        } else {
            this.form.reset();
            this.directions = [];
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