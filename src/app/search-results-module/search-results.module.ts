import { NgModule }           from '@angular/core';
import { SharedModule }       from 'shared/shared.module';

import { SearchResultsContainerComponent } from './search-results-container/search-results-container.component';
import { SearchResultsListComponent } from './search-results-list/search-results-list.component';
import { SearchResultsItemComponent } from './search-results-item/search-results-item.component';
import { routing } from './search-results.routing';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        SearchResultsContainerComponent,
        SearchResultsListComponent,
        SearchResultsItemComponent
    ]

})

export class SearchResultsModule { }