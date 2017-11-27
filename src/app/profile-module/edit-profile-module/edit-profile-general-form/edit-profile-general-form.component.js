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
var forms_1 = require("@angular/forms");
var employee_model_1 = require("shared/models/employee-model");
var departments_service_1 = require("shared/departments.service");
var confirm_service_1 = require("shared/confirm/confirm.service");
var GeneralInfo = (function () {
    function GeneralInfo() {
        this.name = '';
        this.surname = '';
        this.departmentTitle = '';
    }
    return GeneralInfo;
}());
var EditProfileGeneralFormComponent = (function () {
    function EditProfileGeneralFormComponent(fb, _departmentsService, _confirmService) {
        this.fb = fb;
        this._departmentsService = _departmentsService;
        this._confirmService = _confirmService;
        this.onCancel = new core_1.EventEmitter();
        this.employeeToUpdate = new core_1.EventEmitter();
        this.departments = [];
        this.textFields = ['name', 'surname'];
    }
    EditProfileGeneralFormComponent.prototype.ngOnInit = function () {
        this.setData();
        this.getDepartments();
        this.group = this.fb.group({
            name: [
                this.data.name,
                [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32), forms_1.Validators.pattern("[A-Za-z`']{1,}")]
            ],
            surname: [
                this.data.surname,
                [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32), forms_1.Validators.pattern("[A-Za-z`']{1,}")]
            ],
            departmentTitle: [this.data.departmentTitle, [forms_1.Validators.required]]
        });
    };
    EditProfileGeneralFormComponent.prototype.cancelValidation = function (fieldTitle) {
        this.group.get(fieldTitle).markAsUntouched();
    };
    EditProfileGeneralFormComponent.prototype.setData = function () {
        this.data = new GeneralInfo();
        this.data.name = this.employee.name;
        this.data.surname = this.employee.surname;
        this.setDepartment();
    };
    EditProfileGeneralFormComponent.prototype.setDepartment = function () {
        var _this = this;
        this._departmentsService.getDepartmentById(this.employee.departmentId)
            .subscribe(function (item) {
            _this.data.departmentTitle = item.title;
        });
    };
    EditProfileGeneralFormComponent.prototype.getDepartments = function () {
        var _this = this;
        this._departmentsService.getDepartments()
            .subscribe(function (items) {
            _this.departments = items;
        });
    };
    EditProfileGeneralFormComponent.prototype.convertData = function (value) {
        var departmentTitle = value.departmentTitle;
        return this._departmentsService.getDepartmentsBy('title', departmentTitle)
            .map(function (item) { return item[0].id; });
    };
    EditProfileGeneralFormComponent.prototype.onSubmit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            for (var key in this.group.controls) {
                this.group.controls[key].markAsTouched();
            }
            return;
        }
        this.convertData(value)
            .subscribe(function (id) {
            _this.data.departmentId = id;
            delete _this.data.departmentTitle;
            Object.assign(_this.data, value);
            Object.assign(_this.employee, _this.data);
            _this.employeeToUpdate.emit(_this.employee);
            _this.group.reset();
        });
    };
    EditProfileGeneralFormComponent.prototype.cancel = function () {
        var _this = this;
        if (this.group.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then(function (result) {
                if (result) {
                    _this.group.reset();
                    _this.onCancel.emit();
                }
            });
        }
        else {
            this.group.reset();
            this.onCancel.emit();
        }
    };
    EditProfileGeneralFormComponent.prototype.showConfirmDialog = function (message) {
        return this._confirmService.activate(message);
    };
    return EditProfileGeneralFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EditProfileGeneralFormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileGeneralFormComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileGeneralFormComponent.prototype, "employeeToUpdate", void 0);
EditProfileGeneralFormComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-general-form',
        templateUrl: 'edit-profile-general-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        departments_service_1.DepartmentsService,
        confirm_service_1.ConfirmService])
], EditProfileGeneralFormComponent);
exports.EditProfileGeneralFormComponent = EditProfileGeneralFormComponent;
//# sourceMappingURL=edit-profile-general-form.component.js.map