import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageContainerComponent } from './home-page-container/home-page-container.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageContainerComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);