import { NgModule }           from '@angular/core';
import { SharedModule }       from '../shared/shared.module';

import { EmployeesListContainerComponent } from './employees-list-container/employees-list-container.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesListItemComponent } from './employees-list-item/employees-list-item.component';
import { routing } from './employees-list.routing';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        EmployeesListContainerComponent,
        EmployeesListComponent,
        EmployeesListItemComponent
    ]
})

export class EmployeesListModule { }