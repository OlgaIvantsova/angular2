import { Component } from '@angular/core';

import { Department } from 'shared/models/department-model';
import { Tool } from 'shared/models/tool-model';
import { Direction } from 'shared/models/direction-model';
import { SubCategory } from 'shared/models/subcategory-model';

import { DepartmentsService } from 'shared/departments.service';
import { EmployeesService } from 'shared/employees.service';

@Component({
    selector: 'home-page-categories',
    templateUrl: 'home-page-categories.component.html',
    styleUrls: ['home-page-categories.component.scss']
})

export class HomePageCategoriesComponent {
    departments: Department[] = [];
    tools: Tool[] = [];
    directions: Direction[] = [];
    languages: string[] = [];

    constructor(
        private _departmentsService: DepartmentsService,
        private _employeesService: EmployeesService
    ) {}

    ngOnInit() {
        this.getDepartments();
        this.getSubCategories('directions');
        this.getSubCategories('languages');
        this.getSubCategories('tools');
    }

    getDepartments() {
        this._departmentsService.getDepartments()
            .subscribe( items => {
                this.departments = items;

                this.departments.sort( () => {
                    return Math.random() - 0.5;
                });
            });
    }

    getSubCategories(title: string) {
        this._employeesService.getEmployees()
            .subscribe( employees => {
                var subCategories: Tool[] = [];
                employees.forEach( employee => {
                    employee[title].forEach( (item: Tool )=> {
                        item.rate = 1;
                        let searchElem = subCategories.find( subCategory => subCategory.title === item.title );
                        if(searchElem) {
                            searchElem.rate++;
                            return;
                        }
                        subCategories.push(item);
                    });
                });
                subCategories.sort(function (a, b) {
                    return b.rate - a.rate;
                });
                // this.tools = subCategories;
                // var subcategories: string[] = [];
                // employees.forEach( employee => {
                //     employee[title].forEach( (item: SubCategory) => {
                //         if(subcategories.indexOf(item.title) == -1) {
                //             subcategories.push(item.title);
                //         }
                //     });
                // });
                // subcategories.sort( () => {
                //     return Math.random() - 0.5;
                // });
                this[title] = subCategories;
            });
    }

}