import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Department } from 'shared/models/department-model';
import { Employee } from 'shared/models/employee-model';
import { EmployeesService } from 'shared/employees.service';
import { DepartmentsService } from 'shared/departments.service';
import { Language } from 'shared/models/language-model';
import { Tool } from 'shared/models/tool-model';
import { Direction } from 'shared/models/direction-model';
import { Education } from 'shared/models/education-model';
import { Work } from 'shared/models/work-model';

@Component({
    selector: 'profile-right-content',
    templateUrl: 'profile-right-content.component.html'
})

export class ProfileRightContentComponent {
    employee: Employee;
    department: string;
    name: string;
    surname: string;
    foto: string;
    languages: Language[];
    tools: Tool[];
    directions: Direction[];
    position: string;
    educations: Education[];
    works: Work[];
    isEditProfile: boolean = false;

    constructor(
        private _route: ActivatedRoute,
        private _employeesService: EmployeesService,
        private _departmentsService: DepartmentsService
    ) {}

    ngOnInit() {
        this.setEmployee();
    }

    setEmployee() {
        this._route.params.subscribe( params => {
            let id = params['id'];

            this._employeesService.getEmployeeById(id)
                .subscribe( employee => {
                    this.employee = employee;
                    this.setDepartment();
                    this.languages = employee.languages;
                    this.tools = employee.tools;
                    this.directions = employee.directions;
                    this.name = employee.name;
                    this.surname = employee.surname;
                    this.foto = employee.foto;
                    this.position = employee.position;
                    this.works = employee.works;
                    this.educations = employee.educations;
                });
        });
    }

    setDepartment() {
        this._departmentsService.getDepartmentsBy('id', this.employee.departmentId)
            .subscribe( (response: Department[]) => {
                this.department = response[0].title;
            });
    }

}