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
var HomePageCategoryItemComponent = (function () {
    function HomePageCategoryItemComponent(_employeesService) {
        this._employeesService = _employeesService;
    }
    HomePageCategoryItemComponent.prototype.ngOnInit = function () {
        this.title = this.item.title ? this.item.title : this.item;
        this.setPath();
        // this._employeesService.getEmployees()
        //     .subscribe( employees => {
        //         if(this.category === 'department') {
        //             this.setAmountByDepartment(employees, this.item);
        //             return;
        //         }
        //         this.setAmountBySubcategory(employees, this.item);
        //     });
    };
    HomePageCategoryItemComponent.prototype.setPath = function () {
        // if(this.category === 'department') {
        //     this.path = `${this.category}?${this.item.title}`;
        //     return;
        // }
        this.path = this.category + "?" + this.item.title;
        // console.log(this.path);
    };
    return HomePageCategoryItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], HomePageCategoryItemComponent.prototype, "item", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], HomePageCategoryItemComponent.prototype, "category", void 0);
HomePageCategoryItemComponent = __decorate([
    core_1.Component({
        selector: 'home-page-category-item',
        templateUrl: 'home-page-category.component.html'
    }),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], HomePageCategoryItemComponent);
exports.HomePageCategoryItemComponent = HomePageCategoryItemComponent;
//# sourceMappingURL=home-page-category.component.js.map