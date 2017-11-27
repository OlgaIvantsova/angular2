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
var router_1 = require("@angular/router");
var projects_service_1 = require("shared/projects.service");
var employees_service_1 = require("shared/employees.service");
var departments_service_1 = require("shared/departments.service");
var ProfileComponent = (function () {
    function ProfileComponent(_route, _employeesService, _departmentsService, _projectsService) {
        this._route = _route;
        this._employeesService = _employeesService;
        this._departmentsService = _departmentsService;
        this._projectsService = _projectsService;
        this.isEditProfile = false;
        this.categoryToEdit = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.setEmployee(id);
        });
    };
    ProfileComponent.prototype.setEmployee = function (id) {
        var _this = this;
        this._employeesService.getEmployeeById(id)
            .subscribe(function (employee) {
            _this.employee = employee;
            _this.setDepartment();
            _this.setProjects(employee.projectIds);
            _this.languages = employee.languages;
            _this.tools = employee.tools;
            _this.directions = employee.directions;
            _this.name = employee.name;
            _this.surname = employee.surname;
            _this.foto = employee.foto;
            _this.position = employee.position;
            _this.works = employee.works;
            _this.educations = employee.educations;
        });
    };
    ProfileComponent.prototype.setProjects = function (projectIds) {
        var _this = this;
        this._projectsService.getProjects().subscribe(function (projects) {
            _this.projects = projects.filter(function (item) {
                return projectIds.indexOf(item.id) !== -1;
            });
            return _this.projects;
        });
    };
    ProfileComponent.prototype.setDepartment = function () {
        var _this = this;
        this._departmentsService.getDepartmentsBy('id', this.employee.departmentId)
            .subscribe(function (response) {
            _this.department = response[0].title;
        });
    };
    ProfileComponent.prototype.onEdit = function (category) {
        this.isEditProfile = true;
        this.categoryToEdit = category;
    };
    ProfileComponent.prototype.closeForm = function () {
        this.isEditProfile = false;
        this.categoryToEdit = '';
    };
    ProfileComponent.prototype.update = function (employee) {
        var _this = this;
        this._employeesService.update(employee)
            .subscribe(function (employee) {
            _this.setEmployee(employee.id);
            _this.closeForm();
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: 'profile.component.html',
        styleUrls: ['profile.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        employees_service_1.EmployeesService,
        departments_service_1.DepartmentsService,
        projects_service_1.ProjectsService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map