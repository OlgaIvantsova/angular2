import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesListContainerComponent } from './employees-list-container/employees-list-container.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
    {
        path: 'employees',
        component: EmployeesListContainerComponent,
        children: [
            {
                path: '',
                redirectTo: '/all',
                pathMatch: 'full'
            },
            { path: 'all', component: EmployeesListComponent },
            { path: ':title', component: EmployeesListComponent }
        ]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);