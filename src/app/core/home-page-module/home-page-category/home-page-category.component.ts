import { Component, Input, OnInit } from '@angular/core';

import { Employee } from 'shared/models/employee-model';
import { Department } from 'shared/models/department-model';
import { SubCategory } from 'shared/models/subcategory-model';
import { EmployeesService } from 'shared/employees.service';

@Component({
    selector: 'home-page-category-item',
    templateUrl: 'home-page-category.component.html'
})

export class HomePageCategoryItemComponent implements OnInit{
    @Input() item: any;
    @Input() category: string;
    // amount: number = 0; //for displaying amount of employees depending on category
    title: string;
    path: string;

    constructor(
        private _employeesService: EmployeesService) {
    }

    ngOnInit() {
        this.title = this.item.title ? this.item.title : this.item;
        this.setPath();

        // this._employeesService.getEmployees()
        //     .subscribe( employees => {
        //         if(this.category === 'department') {
        //             this.setAmountByDepartment(employees, this.item);
        //             return;
        //         }
        //         this.setAmountBySubcategory(employees, this.item);
        //     });

    }

    setPath() {
        // if(this.category === 'department') {
        //     this.path = `${this.category}?${this.item.title}`;
        //     return;
        // }
        this.path = `${this.category}?${this.item.title}`;
        // console.log(this.path);
    }

    // setAmountByDepartment(employees: Employee[], value: Department) {
    //     employees = employees.filter(employee => {
    //         return employee.departmentId === value.id;
    //     });
    //     this.amount = employees.length;
    // }

    // setAmountBySubcategory(employees: Employee[], value: string) {
    //     employees = employees.filter(employee => {
    //         return employee[this.category].some((item: SubCategory) => {
    //             return item.title === value.toLowerCase();
    //         });
    //     });
    //     this.amount = employees.length;
    // }

}