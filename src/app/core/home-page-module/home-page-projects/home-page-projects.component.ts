import { Component, OnInit } from '@angular/core';

import { Project } from 'shared/models/project-model';
import { ProjectsService } from 'shared/projects.service';
import { EmployeesService } from 'shared/employees.service';

@Component({
    selector: 'home-page-projects',
    templateUrl: 'home-page-projects.component.html',
    styleUrls: ['home-page-projects.component.scss']
})

export class HomePageProjectsComponent implements OnInit {
    projects: Project[];
    randomizedProjects: Project[];

    constructor(
        private _projectsService: ProjectsService,
        private _employeesService: EmployeesService
    ) {}

    ngOnInit() {
        this.getProjects();

    }

    getProjects() {
        this._projectsService.getProjects()
            .subscribe( projects => {

                projects.forEach( project => {
                    this.setEmployeesAmount(project);
                });
                this.projects = projects.concat();
                this.randomizedProjects = projects.concat();

                this.projects.sort( (a,b) => { //sorted by newest
                    return b.startDate - a.startDate;
                });

                this.randomizedProjects.sort( () => {
                    return Math.random() - 0.5;
                });

                this.setRates();
            });
    }

    setEmployeesAmount(project: Project) {
        this._employeesService.getEmployeesByProject(project.id)
            .subscribe( employees => {
                project.employeesAmount = employees.length;
            });
    }

    setRates() {
        let projects = this.projects.concat();
        projects.sort( (a, b) => {
            return b.tools.length - a.tools.length;
        });
        let maxAmount = projects[0].tools.length;
        let minAmount = projects[projects.length-1].tools.length;
        this.projects.forEach( project => {
            if(project.tools.length == maxAmount) {
                project.rate = 5;
            } else if(project.tools.length == minAmount) {
                project.rate = 3;
            } else {
                project.rate = 4;
            }
        });
    }

    getRatesArray(rate: number) {
        let rates: number[] = [];
        for(let i=1; i<=rate; i++) {
            rates.push(i);
        }
        return rates;
    }

}