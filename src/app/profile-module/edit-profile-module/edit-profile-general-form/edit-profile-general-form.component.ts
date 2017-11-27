import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Department } from 'shared/models/department-model';
import { Employee } from 'shared/models/employee-model';

import { DepartmentsService } from 'shared/departments.service';
import { ConfirmService } from 'shared/confirm/confirm.service';

class GeneralInfo {
    name: string = '';
    surname: string = '';
    departmentTitle?: string = '';
    departmentId?: number;
}

@Component({
    selector: 'edit-profile-general-form',
    templateUrl: 'edit-profile-general-form.component.html'
})

export class EditProfileGeneralFormComponent implements OnInit{
    @Input() employee: Employee;
    @Output() onCancel = new EventEmitter();
    @Output() employeeToUpdate = new EventEmitter<Employee>();
    group: FormGroup;
    departments: Department[] = [];
    data: GeneralInfo; //default values
    textFields: string[] = ['name', 'surname'];

    constructor(
        private fb: FormBuilder,
        private _departmentsService: DepartmentsService,
        private _confirmService: ConfirmService
    ) {}

    ngOnInit() {
        this.setData();
        this.getDepartments();

        this.group = this.fb.group({
            name: [
                this.data.name,
                [Validators.required, Validators.minLength(2), Validators.maxLength(32), Validators.pattern("[A-Za-z`']{1,}")]
            ],
            surname: [
                this.data.surname,
                [Validators.required, Validators.minLength(2), Validators.maxLength(32), Validators.pattern("[A-Za-z`']{1,}")]
            ],
            departmentTitle: [this.data.departmentTitle, [Validators.required]]
        });

    }

    cancelValidation(fieldTitle: string) {
        this.group.get(fieldTitle).markAsUntouched();
    }

    setData() {
        this.data = new GeneralInfo();
        this.data.name = this.employee.name;
        this.data.surname = this.employee.surname;
        this.setDepartment();
    }

    setDepartment() {
        this._departmentsService.getDepartmentById(this.employee.departmentId)
            .subscribe( (item: Department) => {
                this.data.departmentTitle = item.title;
            });
    }

    getDepartments() {
        this._departmentsService.getDepartments()
            .subscribe( (items: Department[]) => {
                this.departments = items;
            });
    }

    convertData(value: GeneralInfo): Observable<number> {
        let departmentTitle = value.departmentTitle;
        return this._departmentsService.getDepartmentsBy('title', departmentTitle)
            .map( (item: Department[]) => item[0].id as number);
    }

    onSubmit({ value, valid }: { value: GeneralInfo, valid: boolean }) {
        if(!valid) {
            for(let key in this.group.controls) {
                this.group.controls[key].markAsTouched();
            }
            return;
        }
        this.convertData(value)
            .subscribe( (id: number) => {
                this.data.departmentId = id;
                delete this.data.departmentTitle;
                Object.assign(this.data, value);
                Object.assign(this.employee, this.data);

                this.employeeToUpdate.emit(this.employee);
                this.group.reset();
            });
    }

    cancel() {
        if(this.group.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then( (result) => {
                    if(result) {
                        this.group.reset();
                        this.onCancel.emit();
                    }
                });
        } else {
            this.group.reset();
            this.onCancel.emit();
        }
    }

    showConfirmDialog(message: string): Promise<boolean> {
        return this._confirmService.activate(message);
    }


}