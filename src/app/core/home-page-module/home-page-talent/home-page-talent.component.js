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
var employee_model_1 = require("shared/models/employee-model");
var HomePageTalentComponent = (function () {
    function HomePageTalentComponent(_departmentsService) {
        this._departmentsService = _departmentsService;
        this.department = '';
    }
    HomePageTalentComponent.prototype.ngOnInit = function () {
        this.setDepartment();
    };
    HomePageTalentComponent.prototype.setDepartment = function () {
        var _this = this;
        this._departmentsService.getDepartmentById(this.employee.departmentId)
            .subscribe(function (item) {
            _this.department = item.title;
        });
    };
    return HomePageTalentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], HomePageTalentComponent.prototype, "employee", void 0);
HomePageTalentComponent = __decorate([
    core_1.Component({
        selector: 'home-page-talent',
        templateUrl: 'home-page-talent.component.html'
    }),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService])
], HomePageTalentComponent);
exports.HomePageTalentComponent = HomePageTalentComponent;
//# sourceMappingURL=home-page-talent.component.js.map