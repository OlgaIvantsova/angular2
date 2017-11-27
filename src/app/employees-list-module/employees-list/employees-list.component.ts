import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Employee } from 'shared/models/employee-model';
import { EmployeesService } from 'shared/employees.service';
import { DepartmentsService } from 'shared/departments.service';
import { ProjectsService } from 'shared/projects.service';

@Component({
    selector: 'employees-list',
    templateUrl: 'employees-list.component.html'
})

export class EmployeesListComponent implements OnInit{
    employees: Employee[] = [];
    key: string;
    value: string;
    amount: number = 2;

    constructor(
        private _route: ActivatedRoute,
        private _employeesService: EmployeesService,
        private _departmentsService: DepartmentsService,
        private _projectsService: ProjectsService
    ) {}

    ngOnInit() {
        this._route.params.subscribe(params => {
            let title = params['title'];
            this.key = title;

            if(title) {
                let pos = title.indexOf('?');
                this.key = title.substring(0, pos);
                this.value = title.substring(pos+1, title.length).toLowerCase();
            }
            this.setEmployees(this.key, this.value);
        });

    }

    setEmployees(key: string, value: string) {
        if(!key) {
            this.getAllEmployees();
            return;
        }
        if(key === 'department') {
            this.getEmployeesByDepartment(value);
            return;
        }
        if(key === 'projects') {
            this.getEmployeesByProject(value);
            return;
        }
        this.getEmployeesBy(key, value);
    }

    getEmployeesByProject(value: string) {
        this._projectsService.getProjectBy('title', value)
            .switchMap( (items) => this._employeesService.getEmployeesByProject(items[0].id) )
            .subscribe( employees => {
                this.employees = employees;
            });
    }

    getEmployeesByDepartment(value: string) {
        this._departmentsService.getDepartmentsBy('title', value)
            .switchMap( (items) => this._employeesService.getEmployeesBy('departmentId', items[0].id) )
            .subscribe( employees => {
                this.employees = employees;
            });
    }

    getEmployeesBy(key: string, value: string) {
        this._employeesService.getEmployeesBy(key, value)
            .subscribe( employees => {
                this.employees = employees;
            });
    }

    getAllEmployees() {
        this._employeesService.getEmployees()
            .subscribe( employees => {
                this.employees = employees;
            });
    }

    loadMoreEmployees() {
        this.amount = this.employees.length;
    }

}