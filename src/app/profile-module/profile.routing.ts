import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: 'profile',
        component: ProfileContainerComponent,
        children: [
            { path: '', component: ProfileComponent },
            { path: ':id', component: ProfileComponent }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);