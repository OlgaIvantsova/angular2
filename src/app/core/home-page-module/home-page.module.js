"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var shared_module_1 = require("shared/shared.module");
var home_page_container_component_1 = require("./home-page-container/home-page-container.component");
var home_page_banner_component_1 = require("./home-page-banner/home-page-banner.component");
var home_page_categories_component_1 = require("./home-page-categories/home-page-categories.component");
var home_page_category_component_1 = require("./home-page-category/home-page-category.component");
var home_page_projects_component_1 = require("./home-page-projects/home-page-projects.component");
var home_page_talents_block_component_1 = require("./home-page-talents-block/home-page-talents-block.component");
var home_page_talent_component_1 = require("./home-page-talent/home-page-talent.component");
var home_page_routing_1 = require("./home-page.routing");
var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            home_page_routing_1.routing
        ],
        declarations: [
            home_page_container_component_1.HomePageContainerComponent,
            home_page_banner_component_1.HomePageBannerComponent,
            home_page_categories_component_1.HomePageCategoriesComponent,
            home_page_category_component_1.HomePageCategoryItemComponent,
            home_page_projects_component_1.HomePageProjectsComponent,
            home_page_talents_block_component_1.HomePageTalentsBlockComponent,
            home_page_talent_component_1.HomePageTalentComponent
        ]
    })
], HomePageModule);
exports.HomePageModule = HomePageModule;
//# sourceMappingURL=home-page.module.js.map