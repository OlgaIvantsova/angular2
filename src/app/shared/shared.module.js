"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var departments_service_1 = require("shared/departments.service");
var projects_service_1 = require("shared/projects.service");
var employees_service_1 = require("shared/employees.service");
var pages_service_1 = require("shared/pages.service");
var confirm_service_1 = require("shared/confirm/confirm.service");
var capitalize_pipe_1 = require("shared/pipes/capitalize.pipe");
var pagination_component_1 = require("shared/pagination/pagination.component");
var confirm_component_1 = require("shared/confirm/confirm.component");
var alert_popup_service_1 = require("shared/alert-popup/alert-popup.service");
var alert_popup_component_1 = require("shared/alert-popup/alert-popup.component");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        exports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            capitalize_pipe_1.CapitalizePipe,
            pagination_component_1.PaginationComponent,
            confirm_component_1.ConfirmComponent,
            alert_popup_component_1.AlertPopupComponent
        ],
        declarations: [
            capitalize_pipe_1.CapitalizePipe,
            pagination_component_1.PaginationComponent,
            confirm_component_1.ConfirmComponent,
            alert_popup_component_1.AlertPopupComponent
        ],
        providers: [
            departments_service_1.DepartmentsService,
            projects_service_1.ProjectsService,
            employees_service_1.EmployeesService,
            pages_service_1.PagesService,
            confirm_service_1.ConfirmService,
            alert_popup_service_1.AlertPopupService
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map