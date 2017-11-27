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
var HomePageCategoriesComponent = (function () {
    function HomePageCategoriesComponent(_departmentsService, _employeesService) {
        this._departmentsService = _departmentsService;
        this._employeesService = _employeesService;
        this.departments = [];
        this.tools = [];
        this.directions = [];
        this.languages = [];
    }
    HomePageCategoriesComponent.prototype.ngOnInit = function () {
        this.getDepartments();
        this.getSubCategories('directions');
        this.getSubCategories('languages');
        this.getSubCategories('tools');
    };
    HomePageCategoriesComponent.prototype.getDepartments = function () {
        var _this = this;
        this._departmentsService.getDepartments()
            .subscribe(function (items) {
            _this.departments = items;
            _this.departments.sort(function () {
                return Math.random() - 0.5;
            });
        });
    };
    HomePageCategoriesComponent.prototype.getSubCategories = function (title) {
        var _this = this;
        this._employeesService.getEmployees()
            .subscribe(function (employees) {
            var subCategories = [];
            employees.forEach(function (employee) {
                employee[title].forEach(function (item) {
                    item.rate = 1;
                    var searchElem = subCategories.find(function (subCategory) { return subCategory.title === item.title; });
                    if (searchElem) {
                        searchElem.rate++;
                        return;
                    }
                    subCategories.push(item);
                });
            });
            subCategories.sort(function (a, b) {
                return b.rate - a.rate;
            });
            // this.tools = subCategories;
            // var subcategories: string[] = [];
            // employees.forEach( employee => {
            //     employee[title].forEach( (item: SubCategory) => {
            //         if(subcategories.indexOf(item.title) == -1) {
            //             subcategories.push(item.title);
            //         }
            //     });
            // });
            // subcategories.sort( () => {
            //     return Math.random() - 0.5;
            // });
            _this[title] = subCategories;
        });
    };
    return HomePageCategoriesComponent;
}());
HomePageCategoriesComponent = __decorate([
    core_1.Component({
        selector: 'home-page-categories',
        templateUrl: 'home-page-categories.component.html',
        styleUrls: ['home-page-categories.component.scss']
    }),
    __metadata("design:paramtypes", [departments_service_1.DepartmentsService,
        employees_service_1.EmployeesService])
], HomePageCategoriesComponent);
exports.HomePageCategoriesComponent = HomePageCategoriesComponent;
//# sourceMappingURL=home-page-categories.component.js.map