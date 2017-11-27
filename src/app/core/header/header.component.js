"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var departments_service_1 = require("shared/departments.service");
var employees_service_1 = require("shared/employees.service");
var projects_service_1 = require("shared/projects.service");
var HeaderComponent = (function () {
    function HeaderComponent(_departmentsService, _employeesService, _projectsService) {
        this._departmentsService = _departmentsService;
        this._employeesService = _employeesService;
        this._projectsService = _projectsService;
        this.departments = [];
        this.tools = [];
        this.directions = [];
        this.projects = [];
        this.languages = [];
        this.isSearching = false;
        this.showMenu = true;
        this.curSubMenu = '';
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getProjects();
        this.getSubCategories('directions');
        this.getSubCategories('languages');
        this.getSubCategories('tools');
        if (window.innerWidth < 991) {
            this.showMenu = false;
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    HeaderComponent.prototype.openSubMenu = function (title) {
        if (this.curSubMenu === title) {
            this.curSubMenu = '';
            return;
        }
        this.curSubMenu = title;
    };
    HeaderComponent.prototype.onResize = function (event) {
        this.showMenu = window.innerWidth < 991 ? false : true;
    };
    HeaderComponent.prototype.getProjects = function () {
        var _this = this;
        this._projectsService.getProjects()
            .subscribe(function (items) {
            _this.projects = items;
        });
    };
    HeaderComponent.prototype.getDepartments = function () {
        var _this = this;
        this._departmentsService.getDepartments()
            .subscribe(function (items) {
            _this.departments = items;
        });
    };
    HeaderComponent.prototype.getSubCategories = function (prop) {
        var _this = this;
        this._employeesService.getSubCategories(prop)
            .subscribe(function (items) {
            _this[prop] = items;
        });
    };
    HeaderComponent.prototype.showSearchField = function () {
        console.log(this.isSearching);
        this.isSearching = true;
    };
    HeaderComponent.prototype.hideSearchField = function () {
        this.isSearching = false;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'app-header',
        templateUrl: 'header.component.html',
        styleUrls: ['header.component.scss'],
        host: {
            '(window:resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService,
        employees_service_1.EmployeesService,
        projects_service_1.ProjectsService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map