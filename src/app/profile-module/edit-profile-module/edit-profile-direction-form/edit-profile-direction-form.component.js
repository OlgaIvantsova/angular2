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
var employees_service_1 = require("shared/employees.service");
var confirm_service_1 = require("shared/confirm/confirm.service");
var alert_popup_service_1 = require("shared/alert-popup/alert-popup.service");
var EditProfileDirectionComponent = (function () {
    function EditProfileDirectionComponent(fb, _confirmService, _alertPopupService, _employeesService) {
        this.fb = fb;
        this._confirmService = _confirmService;
        this._alertPopupService = _alertPopupService;
        this._employeesService = _employeesService;
        this.onCancel = new core_1.EventEmitter();
        this.employeeToUpdate = new core_1.EventEmitter();
        this.directions = [];
        this.allDirections = [];
    }
    EditProfileDirectionComponent.prototype.ngOnInit = function () {
        this.directions = this.employee[this.tabName].slice();
        this.getAllDirections();
        this.setFormGroups();
    };
    EditProfileDirectionComponent.prototype.getAllDirections = function () {
        var _this = this;
        this._employeesService.getSubCategories('directions')
            .subscribe(function (items) {
            _this.allDirections = items;
        });
    };
    EditProfileDirectionComponent.prototype.setFormGroups = function () {
        var group = {};
        this.directions.forEach(function (item) {
            group[item] = [item, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]];
        });
        this.form = this.fb.group(group);
        this.addForm = this.fb.group({
            selectTitle: ['', [forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
            textTitle: ['', [forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]]
        });
    };
    EditProfileDirectionComponent.prototype.cancelValidation = function (form, fieldTitle) {
        form.get(fieldTitle).markAsUntouched();
    };
    EditProfileDirectionComponent.prototype.add = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!value.selectTitle && !value.textTitle || value.selectTitle && value.textTitle) {
            return this.showNotification('Choose one from available direction or add new one!');
        }
        if (!valid) {
            for (var key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched(); // this shows validation notification
            }
            return;
        }
        if (valid) {
            var newItem = value.selectTitle ? value.selectTitle : value.textTitle;
            var index = this.directions.indexOf(newItem.toLowerCase());
            if (index !== -1) {
                return this.showNotification('This direction already exists!');
            }
            this.directions.push(newItem);
            this.setFormGroups();
            this.form.markAsDirty();
            this.addForm.reset();
        }
    };
    EditProfileDirectionComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.employee[this.tabName] = this.directions;
        this.form.reset();
        this.directions = [];
        this.employeeToUpdate.emit(this.employee);
    };
    EditProfileDirectionComponent.prototype.remove = function (direction) {
        var _this = this;
        this.showConfirmDialog('Do you really want to remove the direction?')
            .then(function (result) {
            if (result) {
                var index = _this.directions.indexOf(direction);
                _this.directions.splice(index, 1);
                _this.form.removeControl(direction);
                _this.form.markAsDirty();
            }
        });
    };
    EditProfileDirectionComponent.prototype.cancel = function () {
        var _this = this;
        if (this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then(function (result) {
                if (result) {
                    _this.form.reset();
                    _this.directions = [];
                    _this.onCancel.emit();
                }
            });
        }
        else {
            this.form.reset();
            this.directions = [];
            this.onCancel.emit();
        }
    };
    EditProfileDirectionComponent.prototype.showConfirmDialog = function (message) {
        return this._confirmService.activate(message);
    };
    EditProfileDirectionComponent.prototype.showNotification = function (message) {
        return this._alertPopupService.activate(message);
    };
    return EditProfileDirectionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EditProfileDirectionComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditProfileDirectionComponent.prototype, "tabName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileDirectionComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileDirectionComponent.prototype, "employeeToUpdate", void 0);
EditProfileDirectionComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-direction-form',
        templateUrl: 'edit-profile-direction-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        confirm_service_1.ConfirmService,
        alert_popup_service_1.AlertPopupService,
        employees_service_1.EmployeesService])
], EditProfileDirectionComponent);
exports.EditProfileDirectionComponent = EditProfileDirectionComponent;
//# sourceMappingURL=edit-profile-direction-form.component.js.map