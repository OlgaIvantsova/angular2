import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from 'shared/projects.service';
import { EmployeesService } from 'shared/employees.service';
import { DepartmentsService } from 'shared/departments.service';

import { Department } from 'shared/models/department-model';
import { Employee } from 'shared/models/employee-model';
import { Language } from 'shared/models/language-model';
import { Tool } from 'shared/models/tool-model';
import { Direction } from 'shared/models/direction-model';
import { Education } from 'shared/models/education-model';
import { Work } from 'shared/models/work-model';
import { Project } from 'shared/models/project-model';

@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})

export class ProfileComponent implements OnInit{
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
    projects: Project[];
    isEditProfile: boolean = false;
    categoryToEdit: string = '';

    constructor(
        private _route: ActivatedRoute,
        private _employeesService: EmployeesService,
        private _departmentsService: DepartmentsService,
        private _projectsService: ProjectsService
    ) {}

    ngOnInit() {
        this._route.params.subscribe( params => {
            let id = params['id'];

            this.setEmployee(id);
        });
    }

    setEmployee(id: number) {
         this._employeesService.getEmployeeById(id)
               .subscribe( employee => {
                    this.employee = employee;
                    this.setDepartment();
                    this.setProjects(employee.projectIds);
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

    }

    setProjects(projectIds: number[]) {
        this._projectsService.getProjects().subscribe ( (projects: Project[]) => {
            this.projects = projects.filter( (item: Project)=> {
                return projectIds.indexOf(item.id) !== -1;
            });
            return this.projects;
        });
    }

    setDepartment() {
        this._departmentsService.getDepartmentsBy('id', this.employee.departmentId)
            .subscribe( (response: Department[]) => {
                this.department = response[0].title;
            });
    }

    onEdit(category: string) {
        this.isEditProfile = true;
        this.categoryToEdit = category;
    }

    closeForm() {
        this.isEditProfile = false;
        this.categoryToEdit = '';
    }

    update(employee: Employee) {
        this._employeesService.update(employee)
            .subscribe((employee: Employee) => {//переписать метод setEmployee!!!!
                this.setEmployee(employee.id);
                this.closeForm();
        });

    }

}