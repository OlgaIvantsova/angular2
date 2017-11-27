import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import { Project } from 'shared/models/project-model';

@Component({
    selector: 'profile-projects',
    templateUrl: 'profile-projects.component.html',
    styleUrls: ['profile-projects.component.scss']
})

export class ProfileProjectsComponent implements OnInit{
    @Input() projects: Project[];
    @Output() onEdit = new EventEmitter<string>();

    ngOnInit() {
        this.projects.sort( (a,b) => {
            return b.startDate - a.startDate;
        });
    }

    edit(category: string) {
        this.onEdit.emit(category);
    }
}