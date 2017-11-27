import {Component, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Employee } from 'shared/models/employee-model';
import { EmployeesService } from 'shared/employees.service';

interface PathParams {
    nameString: string,
    toolsString: string
}

@Component({
    selector: 'search-results-list',
    templateUrl: 'search-results-list.component.html'
})

export class SearchResultsListComponent implements OnInit{
    employees: Employee[] = [];
    nameValues: string[] = [];
    tools: string[] = [];
    filteredEmployees: Employee[] = [];
    pageSize: number = 1;

    constructor(
        private _route: ActivatedRoute,
        private _employeesService: EmployeesService
    ) {}

    ngOnInit() {
        this._route.params.subscribe( params => {
            let path = params['request'];
            if(path) {
                let pathParams = this.parsePath(path);

                this.nameValues = this.setFilterValues(pathParams.nameString);
                this.tools = this.setFilterValues(pathParams.toolsString);

                let filterArr = this.nameValues.concat(this.tools);
                if(filterArr.indexOf('') != -1) { // if empty string present, remove it from array
                    filterArr.splice(filterArr.indexOf(''), 1);
                }

                this._employeesService.getEmployeesByMultiFilter(filterArr)
                    .subscribe( employees => {
                        this.employees = employees;
                        if(employees.length) {
                            this.filteredEmployees = this.employees.slice();
                            this.filteredEmployees.length = this.pageSize;
                        }
                });
            }
        });

    }

    setFilteredEmployees(indexes: number[]) { //array according to page
        this.filteredEmployees = this.employees.slice(indexes[0], indexes[1] + 1);
    }

    parsePath(path: string): PathParams {
        let pos = path.indexOf('&');
        if(pos == -1) {
            pos = path.length;
        }
        let nameString = path.substring(0, pos);
        let toolsString = path.substring(pos+1, path.length).toLowerCase();
        return { nameString: nameString, toolsString: toolsString}
    }

    setFilterValues(nameString: string) {
        nameString = nameString.substring( nameString.indexOf('=')+1, nameString.length );
        let values = nameString.split('?');
        if(values.indexOf('') != -1) { // if empty string present, remove it from array
            values.splice(values.indexOf(''), 1);
        }
        return values;
    }

}