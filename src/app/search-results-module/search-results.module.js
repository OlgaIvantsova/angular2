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
var search_results_container_component_1 = require("./search-results-container/search-results-container.component");
var search_results_list_component_1 = require("./search-results-list/search-results-list.component");
var search_results_item_component_1 = require("./search-results-item/search-results-item.component");
var search_results_routing_1 = require("./search-results.routing");
var SearchResultsModule = (function () {
    function SearchResultsModule() {
    }
    return SearchResultsModule;
}());
SearchResultsModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            search_results_routing_1.routing
        ],
        declarations: [
            search_results_container_component_1.SearchResultsContainerComponent,
            search_results_list_component_1.SearchResultsListComponent,
            search_results_item_component_1.SearchResultsItemComponent
        ]
    })
], SearchResultsModule);
exports.SearchResultsModule = SearchResultsModule;
//# sourceMappingURL=search-results.module.js.map