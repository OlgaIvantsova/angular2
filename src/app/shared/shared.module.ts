import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';

import { DepartmentsService } from 'shared/departments.service';
import { ProjectsService } from 'shared/projects.service';
import { EmployeesService } from 'shared/employees.service';
import { PagesService } from 'shared/pages.service';
import { ConfirmService } from 'shared/confirm/confirm.service';

import { CapitalizePipe } from "shared/pipes/capitalize.pipe";
import { PaginationComponent } from 'shared/pagination/pagination.component';
import { ConfirmComponent } from "shared/confirm/confirm.component";
import { AlertPopupService } from "shared/alert-popup/alert-popup.service";
import { AlertPopupComponent } from "shared/alert-popup/alert-popup.component";

@NgModule({
    imports:      [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:      [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CapitalizePipe,
        PaginationComponent,
        ConfirmComponent,
        AlertPopupComponent
    ],
    declarations: [
        CapitalizePipe,
        PaginationComponent,
        ConfirmComponent,
        AlertPopupComponent
    ],
    providers: [
        DepartmentsService,
        ProjectsService,
        EmployeesService,
        PagesService,
        ConfirmService,
        AlertPopupService
    ]
})

export class SharedModule { }