import { Component, OnInit } from '@angular/core';

import { Department } from 'shared/models/department-model';
import { Tool } from 'shared/models/tool-model';
import { Project } from 'shared/models/project-model';
import { Direction } from 'shared/models/direction-model';
import { DepartmentsService } from 'shared/departments.service';
import { EmployeesService } from 'shared/employees.service';
import { ProjectsService } from 'shared/projects.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss'],
    host: {
        '(window:resize)': 'onResize($event)'
    }
})

export class HeaderComponent implements OnInit {
    departments: Department[] = [];
    tools: Tool[] = [];
    directions: Direction[] = [];
    projects: Project[] = [];
    languages: string[] = [];
    isSearching: boolean = false;
    showMenu: boolean = true;
    curSubMenu: string = '';

    constructor(
        private _departmentsService: DepartmentsService,
        private _employeesService: EmployeesService,
        private _projectsService: ProjectsService
    ) {}

    ngOnInit() {
        this.getDepartments();
        this.getProjects();
        this.getSubCategories('directions');
        this.getSubCategories('languages');
        this.getSubCategories('tools');

        if(window.innerWidth < 991) {
            this.showMenu = false;
        }

    }

    toggleMenu() {
        this.showMenu = !this.showMenu;
    }

    openSubMenu(title: string) {
        if(this.curSubMenu === title) {
            this.curSubMenu = '';
            return;
        }
        this.curSubMenu = title;
    }

    onResize(event: Event) {
        this.showMenu = window.innerWidth < 991 ? false : true;
    }

    getProjects() {
        this._projectsService.getProjects()
            .subscribe( items => {
                this.projects = items;
            });
    }

    getDepartments() {
        this._departmentsService.getDepartments()
            .subscribe( items => {
                this.departments = items;
            });
    }

    getSubCategories(prop: string) {
        this._employeesService.getSubCategories(prop)
            .subscribe( items => {
                this[prop] = items;
            });
    }

    showSearchField() {
        console.log(this.isSearching);
        this.isSearching = true;
    }

    hideSearchField() {
        this.isSearching = false;
    }

    // getSubCategories(prop: string) {
    //     this._employeesService.getEmployees()
    //         .subscribe( employees => {
    //             var subCategories: string[] = [];
    //             employees.forEach( employee => {
    //                 employee[prop].forEach( (item: any )=> {
    //                     if(subCategories.indexOf(item.title) == -1) {
    //                         subCategories.push(item.title);
    //                     }
    //                 });
    //             });
    //             this[prop] = subCategories.sort();
    //         });
    // }

}