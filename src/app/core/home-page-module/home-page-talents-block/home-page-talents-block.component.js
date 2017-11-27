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
var employees_service_1 = require("shared/employees.service");
var HomePageTalentsBlockComponent = (function () {
    function HomePageTalentsBlockComponent(_employeesService) {
        this._employeesService = _employeesService;
        this.employees = [];
    }
    HomePageTalentsBlockComponent.prototype.ngOnInit = function () {
        this.getTalents();
    };
    HomePageTalentsBlockComponent.prototype.getTalents = function () {
        var _this = this;
        this._employeesService.getEmployees()
            .subscribe(function (employees) {
            _this.employees = employees.sort(function (a, b) {
                return b.tools.length - a.tools.length;
            });
        });
    };
    return HomePageTalentsBlockComponent;
}());
HomePageTalentsBlockComponent = __decorate([
    core_1.Component({
        selector: 'home-page-talents-block',
        templateUrl: 'home-page-talents-block.component.html'
    }),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], HomePageTalentsBlockComponent);
exports.HomePageTalentsBlockComponent = HomePageTalentsBlockComponent;
//# sourceMappingURL=home-page-talents-block.component.js.map