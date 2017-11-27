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
var SearchResultsListComponent = (function () {
    function SearchResultsListComponent(_route, _employeesService) {
        this._route = _route;
        this._employeesService = _employeesService;
        this.employees = [];
        this.nameValues = [];
        this.tools = [];
        this.filteredEmployees = [];
        this.pageSize = 1;
    }
    SearchResultsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var path = params['request'];
            if (path) {
                var pathParams = _this.parsePath(path);
                _this.nameValues = _this.setFilterValues(pathParams.nameString);
                _this.tools = _this.setFilterValues(pathParams.toolsString);
                var filterArr = _this.nameValues.concat(_this.tools);
                if (filterArr.indexOf('') != -1) {
                    filterArr.splice(filterArr.indexOf(''), 1);
                }
                _this._employeesService.getEmployeesByMultiFilter(filterArr)
                    .subscribe(function (employees) {
                    _this.employees = employees;
                    if (employees.length) {
                        _this.filteredEmployees = _this.employees.slice();
                        _this.filteredEmployees.length = _this.pageSize;
                    }
                });
            }
        });
    };
    SearchResultsListComponent.prototype.setFilteredEmployees = function (indexes) {
        this.filteredEmployees = this.employees.slice(indexes[0], indexes[1] + 1);
    };
    SearchResultsListComponent.prototype.parsePath = function (path) {
        var pos = path.indexOf('&');
        if (pos == -1) {
            pos = path.length;
        }
        var nameString = path.substring(0, pos);
        var toolsString = path.substring(pos + 1, path.length).toLowerCase();
        return { nameString: nameString, toolsString: toolsString };
    };
    SearchResultsListComponent.prototype.setFilterValues = function (nameString) {
        nameString = nameString.substring(nameString.indexOf('=') + 1, nameString.length);
        var values = nameString.split('?');
        if (values.indexOf('') != -1) {
            values.splice(values.indexOf(''), 1);
        }
        return values;
    };
    return SearchResultsListComponent;
}());
SearchResultsListComponent = __decorate([
    core_1.Component({
        selector: 'search-results-list',
        templateUrl: 'search-results-list.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        employees_service_1.EmployeesService])
], SearchResultsListComponent);
exports.SearchResultsListComponent = SearchResultsListComponent;
//# sourceMappingURL=search-results-list.component.js.map