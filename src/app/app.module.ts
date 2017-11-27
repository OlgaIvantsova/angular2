import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule }       from './shared/shared.module';
import { EmployeesListModule } from './employees-list-module/employees-list.module';
import { SearchResultsModule } from './search-results-module/search-results.module';
import { ProfileModule } from './profile-module/profile.module';

import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        CoreModule.forRoot(),
        SharedModule,
        HttpModule,
        EmployeesListModule,
        SearchResultsModule,
        ProfileModule,
        routing
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }