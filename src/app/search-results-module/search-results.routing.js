"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var search_results_container_component_1 = require("./search-results-container/search-results-container.component");
var search_results_list_component_1 = require("./search-results-list/search-results-list.component");
var routes = [
    {
        path: 'search',
        component: search_results_container_component_1.SearchResultsContainerComponent,
        children: [
            { path: '', component: search_results_list_component_1.SearchResultsListComponent },
            { path: ':request', component: search_results_list_component_1.SearchResultsListComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=search-results.routing.js.map