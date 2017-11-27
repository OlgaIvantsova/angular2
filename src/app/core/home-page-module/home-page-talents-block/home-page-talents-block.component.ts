import { Component, OnInit } from '@angular/core';

import { Employee } from 'shared/models/employee-model';
import { EmployeesService } from 'shared/employees.service';
import { DepartmentsService } from 'shared/departments.service';

@Component({
    selector: 'home-page-talents-block',
    templateUrl: 'home-page-talents-block.component.html'
})

export class HomePageTalentsBlockComponent implements OnInit {
    employees: Employee[] =[];

    constructor(
        private _employeesService: EmployeesService
    ) {}

    ngOnInit() {
        this.getTalents();
    }

    getTalents() {
        this._employeesService.getEmployees()
            .subscribe( employees => {
                this.employees = employees.sort( (a, b) => {
                    return b.tools.length - a.tools.length;
                });
            });
    }

    // getDepartment(id: number) {
    //     this._departmentsService.getDepartmentById(id)
    //         .subscribe( department => {
    //
    //         });
    // }

}