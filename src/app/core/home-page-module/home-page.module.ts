import { NgModule }           from '@angular/core';
import { SharedModule }       from 'shared/shared.module';

import { HomePageContainerComponent } from './home-page-container/home-page-container.component';
import { HomePageBannerComponent } from './home-page-banner/home-page-banner.component';
import { HomePageCategoriesComponent } from './home-page-categories/home-page-categories.component';
import { HomePageCategoryItemComponent } from './home-page-category/home-page-category.component';
import { HomePageProjectsComponent } from './home-page-projects/home-page-projects.component';
import { HomePageTalentsBlockComponent } from './home-page-talents-block/home-page-talents-block.component';
import { HomePageTalentComponent } from './home-page-talent/home-page-talent.component';

import { routing } from './home-page.routing';

@NgModule({
    imports: [
        SharedModule,
        routing
    ],
    declarations: [
        HomePageContainerComponent,
        HomePageBannerComponent,
        HomePageCategoriesComponent,
        HomePageCategoryItemComponent,
        HomePageProjectsComponent,
        HomePageTalentsBlockComponent,
        HomePageTalentComponent
    ]

})

export class HomePageModule { }