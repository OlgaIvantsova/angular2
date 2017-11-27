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
var employees_service_1 = require("shared/employees.service");
var departments_service_1 = require("shared/departments.service");
var projects_service_1 = require("shared/projects.service");
var EmployeesListComponent = (function () {
    function EmployeesListComponent(_route, _employeesService, _departmentsService, _projectsService) {
        this._route = _route;
        this._employeesService = _employeesService;
        this._departmentsService = _departmentsService;
        this._projectsService = _projectsService;
        this.employees = [];
        this.amount = 2;
    }
    EmployeesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var title = params['title'];
            _this.key = title;
            if (title) {
                var pos = title.indexOf('?');
                _this.key = title.substring(0, pos);
                _this.value = title.substring(pos + 1, title.length).toLowerCase();
            }
            _this.setEmployees(_this.key, _this.value);
        });
    };
    EmployeesListComponent.prototype.setEmployees = function (key, value) {
        if (!key) {
            this.getAllEmployees();
            return;
        }
        if (key === 'department') {
            this.getEmployeesByDepartment(value);
            return;
        }
        if (key === 'projects') {
            this.getEmployeesByProject(value);
            return;
        }
        this.getEmployeesBy(key, value);
    };
    EmployeesListComponent.prototype.getEmployeesByProject = function (value) {
        var _this = this;
        this._projectsService.getProjectBy('title', value)
            .switchMap(function (items) { return _this._employeesService.getEmployeesByProject(items[0].id); })
            .subscribe(function (employees) {
            _this.employees = employees;
        });
    };
    EmployeesListComponent.prototype.getEmployeesByDepartment = function (value) {
        var _this = this;
        this._departmentsService.getDepartmentsBy('title', value)
            .switchMap(function (items) { return _this._employeesService.getEmployeesBy('departmentId', items[0].id); })
            .subscribe(function (employees) {
            _this.employees = employees;
        });
    };
    EmployeesListComponent.prototype.getEmployeesBy = function (key, value) {
        var _this = this;
        this._employeesService.getEmployeesBy(key, value)
            .subscribe(function (employees) {
            _this.employees = employees;
        });
    };
    EmployeesListComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this._employeesService.getEmployees()
            .subscribe(function (employees) {
            _this.employees = employees;
        });
    };
    EmployeesListComponent.prototype.loadMoreEmployees = function () {
        this.amount = this.employees.length;
    };
    return EmployeesListComponent;
}());
EmployeesListComponent = __decorate([
    core_1.Component({
        selector: 'employees-list',
        templateUrl: 'employees-list.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        employees_service_1.EmployeesService,
        departments_service_1.DepartmentsService,
        projects_service_1.ProjectsService])
], EmployeesListComponent);
exports.EmployeesListComponent = EmployeesListComponent;
//# sourceMappingURL=employees-list.component.js.map