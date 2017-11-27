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
var ProfileRightContentComponent = (function () {
    function ProfileRightContentComponent(_route, _employeesService, _departmentsService) {
        this._route = _route;
        this._employeesService = _employeesService;
        this._departmentsService = _departmentsService;
        this.isEditProfile = false;
    }
    ProfileRightContentComponent.prototype.ngOnInit = function () {
        this.setEmployee();
    };
    ProfileRightContentComponent.prototype.setEmployee = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this._employeesService.getEmployeeById(id)
                .subscribe(function (employee) {
                _this.employee = employee;
                _this.setDepartment();
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
        });
    };
    ProfileRightContentComponent.prototype.setDepartment = function () {
        var _this = this;
        this._departmentsService.getDepartmentsBy('id', this.employee.departmentId)
            .subscribe(function (response) {
            _this.department = response[0].title;
        });
    };
    return ProfileRightContentComponent;
}());
ProfileRightContentComponent = __decorate([
    core_1.Component({
        selector: 'profile-right-content',
        templateUrl: 'profile-right-content.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        employees_service_1.EmployeesService,
        departments_service_1.DepartmentsService])
], ProfileRightContentComponent);
exports.ProfileRightContentComponent = ProfileRightContentComponent;
//# sourceMappingURL=profile-right-content-component.js.map