import { Component, Input, OnInit } from '@angular/core';

import { Employee } from 'shared/models/employee-model';
import { Department } from 'shared/models/department-model';
import { DepartmentsService } from 'shared/departments.service';

@Component({
    selector: 'search-results-item',
    templateUrl: 'search-results-item.component.html'
})

export class SearchResultsItemComponent implements OnInit{
    @Input() employee: Employee;
    department: string;

    constructor(
        private _departmentsService: DepartmentsService
    ) {}

    ngOnInit() {
        this._departmentsService.getDepartmentsBy('id', this.employee.departmentId)
            .subscribe( (response: Department[]) => {
                this.department = response[0].title;
            });
    }
}