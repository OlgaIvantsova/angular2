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
var edit_profile_container_component_1 = require("./edit-profile-container/edit-profile-container.component");
var edit_profile_general_form_component_1 = require("./edit-profile-general-form/edit-profile-general-form.component");
var edit_profile_levels_form_component_1 = require("./edit-profile-levels-form/edit-profile-levels-form.component");
var edit_profile_timeline_form_component_1 = require("./edit-profile-timeline-form/edit-profile-timeline-form.component");
var edit_profile_timeline_add_component_1 = require("./edit-profile-timeline-form/edit-profile-timeline-add/edit-profile-timeline-add.component");
var edit_profile_direction_form_component_1 = require("./edit-profile-direction-form/edit-profile-direction-form.component");
var edit_profile_projects_form_component_1 = require("./edit-profile-projects-form/edit-profile-projects-form.component");
var EditProfileModule = (function () {
    function EditProfileModule() {
    }
    return EditProfileModule;
}());
EditProfileModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule
        ],
        exports: [
            edit_profile_container_component_1.EditProfileContainerComponent,
            edit_profile_general_form_component_1.EditProfileGeneralFormComponent,
            edit_profile_levels_form_component_1.EditProfileLevelsFormComponent,
            edit_profile_timeline_form_component_1.EditProfileTimelineFormComponent,
            edit_profile_timeline_add_component_1.EditProfileTimelineAddComponent,
            edit_profile_direction_form_component_1.EditProfileDirectionComponent,
            edit_profile_projects_form_component_1.EditProfileProjectsComponent
        ],
        declarations: [
            edit_profile_container_component_1.EditProfileContainerComponent,
            edit_profile_general_form_component_1.EditProfileGeneralFormComponent,
            edit_profile_levels_form_component_1.EditProfileLevelsFormComponent,
            edit_profile_timeline_form_component_1.EditProfileTimelineFormComponent,
            edit_profile_timeline_add_component_1.EditProfileTimelineAddComponent,
            edit_profile_direction_form_component_1.EditProfileDirectionComponent,
            edit_profile_projects_form_component_1.EditProfileProjectsComponent
        ]
    })
], EditProfileModule);
exports.EditProfileModule = EditProfileModule;
//# sourceMappingURL=edit-profile.module.js.map