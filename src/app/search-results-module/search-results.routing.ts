import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsContainerComponent } from './search-results-container/search-results-container.component';
import { SearchResultsListComponent } from './search-results-list/search-results-list.component';

const routes: Routes = [
    {
        path: 'search',
        component: SearchResultsContainerComponent,
        children: [
            { path: '', component: SearchResultsListComponent },
            { path: ':request', component: SearchResultsListComponent }
        ]
    }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);