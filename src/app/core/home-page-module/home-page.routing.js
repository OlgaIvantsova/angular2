"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_page_container_component_1 = require("./home-page-container/home-page-container.component");
var routes = [
    {
        path: 'home',
        component: home_page_container_component_1.HomePageContainerComponent
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=home-page.routing.js.map