"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var profile_container_component_1 = require("./profile-container/profile-container.component");
var profile_component_1 = require("./profile/profile.component");
var routes = [
    {
        path: 'profile',
        component: profile_container_component_1.ProfileContainerComponent,
        children: [
            { path: '', component: profile_component_1.ProfileComponent },
            { path: ':id', component: profile_component_1.ProfileComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=profile.routing.js.map