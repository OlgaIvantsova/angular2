import { Component, Input, OnInit } from '@angular/core';

import { DepartmentsService } from 'shared/departments.service';
import { Department } from 'shared/models/department-model';
import { Employee } from 'shared/models/employee-model';

@Component({
    selector: 'home-page-talent',
    templateUrl: 'home-page-talent.component.html'
})

export class HomePageTalentComponent implements OnInit {
    @Input() employee: Employee;
    department: string = '';

    constructor(
        private _departmentsService: DepartmentsService
    ) {}

    ngOnInit() {
        this.setDepartment();
    }

    setDepartment() {
        this._departmentsService.getDepartmentById(this.employee.departmentId)
            .subscribe( item => {
                this.department = item.title;
            });
    }
}