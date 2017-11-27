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
var projects_service_1 = require("shared/projects.service");
var employees_service_1 = require("shared/employees.service");
var HomePageProjectsComponent = (function () {
    function HomePageProjectsComponent(_projectsService, _employeesService) {
        this._projectsService = _projectsService;
        this._employeesService = _employeesService;
    }
    HomePageProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    HomePageProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this._projectsService.getProjects()
            .subscribe(function (projects) {
            projects.forEach(function (project) {
                _this.setEmployeesAmount(project);
            });
            _this.projects = projects.concat();
            _this.randomizedProjects = projects.concat();
            _this.projects.sort(function (a, b) {
                return b.startDate - a.startDate;
            });
            _this.randomizedProjects.sort(function () {
                return Math.random() - 0.5;
            });
            _this.setRates();
        });
    };
    HomePageProjectsComponent.prototype.setEmployeesAmount = function (project) {
        this._employeesService.getEmployeesByProject(project.id)
            .subscribe(function (employees) {
            project.employeesAmount = employees.length;
        });
    };
    HomePageProjectsComponent.prototype.setRates = function () {
        var projects = this.projects.concat();
        projects.sort(function (a, b) {
            return b.tools.length - a.tools.length;
        });
        var maxAmount = projects[0].tools.length;
        var minAmount = projects[projects.length - 1].tools.length;
        this.projects.forEach(function (project) {
            if (project.tools.length == maxAmount) {
                project.rate = 5;
            }
            else if (project.tools.length == minAmount) {
                project.rate = 3;
            }
            else {
                project.rate = 4;
            }
        });
    };
    HomePageProjectsComponent.prototype.getRatesArray = function (rate) {
        var rates = [];
        for (var i = 1; i <= rate; i++) {
            rates.push(i);
        }
        return rates;
    };
    return HomePageProjectsComponent;
}());
HomePageProjectsComponent = __decorate([
    core_1.Component({
        selector: 'home-page-projects',
        templateUrl: 'home-page-projects.component.html',
        styleUrls: ['home-page-projects.component.scss']
    }),
    __metadata("design:paramtypes", [projects_service_1.ProjectsService,
        employees_service_1.EmployeesService])
], HomePageProjectsComponent);
exports.HomePageProjectsComponent = HomePageProjectsComponent;
//# sourceMappingURL=home-page-projects.component.js.map