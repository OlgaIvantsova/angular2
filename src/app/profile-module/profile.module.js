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
var profile_container_component_1 = require("./profile-container/profile-container.component");
var profile_component_1 = require("./profile/profile.component");
var profile_language_component_1 = require("./profile-language/profile-language.component");
var profile_skill_component_1 = require("./profile-skill/profile-skill.component");
var profile_direction_component_1 = require("./profile-direction/profile-direction.component");
var profile_timeline_component_1 = require("./profile-timeline/profile-timeline.component");
var profile_timeline_item_component_1 = require("./profile-timeline-item/profile-timeline-item.component");
var profile_projects_component_1 = require("./profile-projects/profile-projects.component");
var edit_profile_module_1 = require("./edit-profile-module/edit-profile.module");
var profile_routing_1 = require("./profile.routing");
var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            edit_profile_module_1.EditProfileModule,
            profile_routing_1.routing
        ],
        declarations: [
            profile_container_component_1.ProfileContainerComponent,
            profile_component_1.ProfileComponent,
            profile_language_component_1.ProfileLanguageComponent,
            profile_skill_component_1.ProfileSkillComponent,
            profile_direction_component_1.ProfileDirectionComponent,
            profile_timeline_component_1.ProfileTimelineComponent,
            profile_timeline_item_component_1.ProfileTimelineItemComponent,
            profile_projects_component_1.ProfileProjectsComponent
        ]
    })
], ProfileModule);
exports.ProfileModule = ProfileModule;
//# sourceMappingURL=profile.module.js.map