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
var http_1 = require("@angular/http");
var employee_model_1 = require("./models/employee-model");
var EmployeesService = (function () {
    function EmployeesService(_http) {
        this._http = _http;
        this.url = API_URL + "employees";
    }
    EmployeesService.prototype.getEmployees = function () {
        return this._http.get(this.url)
            .map(function (r) {
            var employees = r.json().map(function (person) {
                return new employee_model_1.Employee(person);
            });
            return employees;
        });
    };
    EmployeesService.prototype.update = function (employee) {
        return this._http.put(this.url + "/" + employee.id, employee)
            .map(function (r) { return r.json(); });
    };
    EmployeesService.prototype.getSubCategories = function (prop) {
        return this.getEmployees()
            .map(function (employees) {
            var subCategories = [];
            employees.forEach(function (employee) {
                employee[prop].forEach(function (item) {
                    if (subCategories.indexOf(item.title) == -1) {
                        subCategories.push(item.title);
                    }
                });
            });
            return subCategories.sort();
        });
    };
    EmployeesService.prototype.getEmployeesBy = function (key, value) {
        if (key === 'departmentId') {
            return this._http.get(this.url + "?" + key + "=" + value)
                .map(function (r) { return r.json(); });
        }
        return this.getEmployees()
            .map(function (employees) {
            employees = employees.filter(function (employee) {
                return employee[key].some(function (item) {
                    return item.title === value;
                });
            });
            return employees;
        });
    };
    EmployeesService.prototype.getEmployeesByProject = function (id) {
        return this.getEmployees()
            .map(function (employees) {
            return employees.filter(function (employee) {
                return employee.projectIds.indexOf(id) !== -1;
            });
        });
    };
    EmployeesService.prototype.getEmployeeById = function (id) {
        return this._http.get(this.url + "/" + id)
            .map(function (r) {
            return r.json();
        });
    };
    EmployeesService.prototype.getEmployeesByMultiFilter = function (arr) {
        var _this = this;
        return this.getEmployees()
            .map(function (employees) {
            return employees.filter(function (employee) {
                return _this.arePresentValues(employee, arr); // check if employees have values
            });
        });
    };
    EmployeesService.prototype.arePresentValues = function (employee, arr) {
        var _this = this;
        return arr.every(function (item) {
            var isPresent;
            for (var key in employee) {
                if (typeof employee[key] === 'string') {
                    isPresent = (employee[key].toLowerCase() === item);
                }
                else {
                    if (key !== 'tools' && key !== 'languages')
                        continue;
                    isPresent = _this.isPresentInSubCategory(employee[key], item);
                }
                if (isPresent)
                    return isPresent;
            }
            return false;
        });
    };
    EmployeesService.prototype.isPresentInSubCategory = function (subCategories, value) {
        return subCategories.some(function (subCategory) {
            var isPresent;
            for (var prop in subCategory) {
                isPresent = subCategory[prop].toLowerCase() === value;
                if (isPresent)
                    return isPresent;
            }
            return isPresent;
        });
    };
    return EmployeesService;
}());
EmployeesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeesService);
exports.EmployeesService = EmployeesService;
//# sourceMappingURL=employees.service.js.map