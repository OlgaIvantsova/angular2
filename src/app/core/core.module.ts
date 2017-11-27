import {
    ModuleWithProviders, NgModule,
    Optional, SkipSelf }       from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/shared.module';
import { HomePageModule } from './home-page-module/home-page.module';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HomePageModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ]

})

export class CoreModule {
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule
        };
    }
}