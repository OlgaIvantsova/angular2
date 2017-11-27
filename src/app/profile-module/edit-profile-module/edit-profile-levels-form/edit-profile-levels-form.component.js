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
var skills_level_enum_1 = require("shared/levels/skills-level-enum");
var language_level_enum_1 = require("shared/levels/language-level-enum");
var employee_model_1 = require("shared/models/employee-model");
var confirm_service_1 = require("shared/confirm/confirm.service");
var alert_popup_service_1 = require("shared/alert-popup/alert-popup.service");
var LevelsInfo = (function () {
    function LevelsInfo() {
        this.title = '';
        this.level = '';
    }
    return LevelsInfo;
}());
var EditProfileLevelsFormComponent = (function () {
    function EditProfileLevelsFormComponent(fb, _confirmService, _alertPopupService) {
        this.fb = fb;
        this._confirmService = _confirmService;
        this._alertPopupService = _alertPopupService;
        this.onCancel = new core_1.EventEmitter();
        this.employeeToUpdate = new core_1.EventEmitter();
        this.levels = [];
        this.selectFields = [];
    }
    EditProfileLevelsFormComponent.prototype.ngOnInit = function () {
        this.setLevels();
        this.selectFields = this.employee[this.tabName].concat();
        this.setFormGroups();
    };
    EditProfileLevelsFormComponent.prototype.setFormGroups = function () {
        var _this = this;
        var group = {};
        this.selectFields.forEach(function (item) {
            group[item.title] = _this.fb.group({
                title: [item.title, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
                level: [item.level, [forms_1.Validators.required]]
            });
        });
        this.form = this.fb.group(group);
        this.addForm = this.fb.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
            level: ['', [forms_1.Validators.required]]
        });
    };
    EditProfileLevelsFormComponent.prototype.remove = function (record) {
        var _this = this;
        this.showConfirmDialog('Do you really want to remove the record?')
            .then(function (result) {
            if (result) {
                _this.selectFields = _this.selectFields.filter(function (item) {
                    return item.title !== record.title;
                });
                _this.form.removeControl(record.title);
                _this.form.markAsDirty();
            }
        });
    };
    EditProfileLevelsFormComponent.prototype.add = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            for (var key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched(); // this shows validation notification
            }
            return;
        }
        var isPresent = this.selectFields.find(function (item) {
            return _this.addForm.value.title === item.title;
        });
        if (isPresent) {
            this.showNotification('The record with the same title already exists!')
                .then(function () { });
        }
        else {
            this.selectFields.push(this.addForm.value);
            var newTitle = this.addForm.get('title').value;
            var newLevel = this.addForm.get('level').value;
            this.form.addControl(newTitle, new forms_1.FormGroup({
                title: new forms_1.FormControl(newTitle, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]),
                level: new forms_1.FormControl(newLevel, forms_1.Validators.required)
            }));
            this.addForm.reset();
            this.form.markAsDirty();
        }
    };
    EditProfileLevelsFormComponent.prototype.setLevels = function () {
        if (this.tabName === 'tools') {
            for (var prop in skills_level_enum_1.SkillLevel) {
                if (parseInt(prop))
                    continue;
                this.levels.push(prop);
            }
        }
        if (this.tabName === 'languages') {
            for (var prop in language_level_enum_1.LanguageLevel) {
                if (parseInt(prop))
                    continue;
                this.levels.push(prop);
            }
        }
    };
    EditProfileLevelsFormComponent.prototype.cancelValidation = function (form, fieldTitle) {
        form.get(fieldTitle).markAsUntouched();
    };
    EditProfileLevelsFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            for (var key in this.form.controls) {
                this.form.controls[key].markAsTouched(); // this shows validation notification
            }
            return;
        }
        var result = [];
        for (var key in value) {
            result.push(value[key]);
        }
        this.employee[this.tabName] = result;
        this.form.reset();
        this.selectFields = [];
        this.employeeToUpdate.emit(this.employee);
    };
    EditProfileLevelsFormComponent.prototype.cancel = function () {
        var _this = this;
        if (this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then(function (result) {
                if (result) {
                    _this.form.reset();
                    _this.selectFields = [];
                    _this.onCancel.emit();
                }
            });
        }
        else {
            this.form.reset();
            this.selectFields = [];
            this.onCancel.emit();
        }
    };
    EditProfileLevelsFormComponent.prototype.showConfirmDialog = function (message) {
        return this._confirmService.activate(message);
    };
    EditProfileLevelsFormComponent.prototype.showNotification = function (message) {
        return this._alertPopupService.activate(message);
    };
    return EditProfileLevelsFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditProfileLevelsFormComponent.prototype, "tabName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EditProfileLevelsFormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileLevelsFormComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileLevelsFormComponent.prototype, "employeeToUpdate", void 0);
EditProfileLevelsFormComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-levels-form',
        templateUrl: 'edit-profile-levels-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        confirm_service_1.ConfirmService,
        alert_popup_service_1.AlertPopupService])
], EditProfileLevelsFormComponent);
exports.EditProfileLevelsFormComponent = EditProfileLevelsFormComponent;
//# sourceMappingURL=edit-profile-levels-form.component.js.map