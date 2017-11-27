import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'shared/models/employee-model';

@Component({
    selector: 'home-page-banner',
    templateUrl: 'home-page-banner.component.html',
    styleUrls: ['home-page-banner.component.scss']
})

export class HomePageBannerComponent {
    employees: Employee[] = [];
    modelName: string;
    modelTool: string;

    constructor(
        private _router: Router
    ) {}

    onSearch(name: string, toolName: string) {
        let tools: string[];
        let fullName: string[];
        let path: string;
        name = name.trim().toLowerCase();
        fullName = name.split(' ');
        path = `names=`;
        fullName.forEach( item => {
            path = `${path}${item}?`;
        });
        if(toolName) {
            toolName = toolName.trim().toLowerCase();
            tools = toolName.split(' ');
            path = `${path}&tools=`;
            tools.forEach( (item) => {
                path = `${path}${item}?`
            });
        }
        this._router.navigate(['/search', { request: path} ]);
    }
}