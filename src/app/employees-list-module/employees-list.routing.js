"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var employees_list_container_component_1 = require("./employees-list-container/employees-list-container.component");
var employees_list_component_1 = require("./employees-list/employees-list.component");
var routes = [
    {
        path: 'employees',
        component: employees_list_container_component_1.EmployeesListContainerComponent,
        children: [
            {
                path: '',
                redirectTo: '/all',
                pathMatch: 'full'
            },
            { path: 'all', component: employees_list_component_1.EmployeesListComponent },
            { path: ':title', component: employees_list_component_1.EmployeesListComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=employees-list.routing.js.map