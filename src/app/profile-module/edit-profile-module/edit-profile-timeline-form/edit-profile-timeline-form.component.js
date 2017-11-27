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
var end_year_validation_1 = require("./end-year-validation");
var employee_model_1 = require("shared/models/employee-model");
var confirm_service_1 = require("shared/confirm/confirm.service");
var EditProfileTimelineFormComponent = (function () {
    function EditProfileTimelineFormComponent(fb, _confirmService) {
        this.fb = fb;
        this._confirmService = _confirmService;
        this.onCancel = new core_1.EventEmitter();
        this.employeeToUpdate = new core_1.EventEmitter();
        this.fieldSets = [];
        this.yearsArr = [];
        this.isAddFormOpen = false;
    }
    EditProfileTimelineFormComponent.prototype.ngOnInit = function () {
        this.setYearsArr();
        this.setFieldSets();
        this.setFormGroups();
    };
    EditProfileTimelineFormComponent.prototype.closeAddForm = function () {
        this.isAddFormOpen = false;
    };
    EditProfileTimelineFormComponent.prototype.openAddForm = function () {
        this.isAddFormOpen = true;
    };
    EditProfileTimelineFormComponent.prototype.setYearsArr = function () {
        for (var i = 1995; i <= new Date().getFullYear(); i++) {
            this.yearsArr.push(i);
        }
    };
    EditProfileTimelineFormComponent.prototype.setFieldSets = function () {
        this.fieldSets = this.employee[this.tabName].slice().map(function (item) {
            item.title = item.position ? item.position : item.qualification;
            item.organization = item.enterprise ? item.enterprise : item.university;
            return item;
        });
    };
    EditProfileTimelineFormComponent.prototype.setFormGroups = function () {
        var _this = this;
        var group = {};
        this.fieldSets.forEach(function (item) {
            group[item.organization] = _this.fb.group({
                title: [item.title, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
                organization: [item.organization, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
                description: [item.description, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(500)]],
                startYear: [item.startYear, [forms_1.Validators.required]],
                endYear: [item.endYear, [forms_1.Validators.required]]
            }, { validator: end_year_validation_1.endYearValidation });
        });
        this.form = this.fb.group(group);
    };
    EditProfileTimelineFormComponent.prototype.remove = function (record) {
        var _this = this;
        this.showConfirmDialog('Do you really want to remove the record?')
            .then(function (result) {
            if (result) {
                _this.fieldSets = _this.fieldSets.filter(function (item) {
                    return item.organization !== record.organization;
                });
                _this.form.removeControl(record.organization);
                _this.form.markAsDirty();
            }
        });
    };
    EditProfileTimelineFormComponent.prototype.addRecord = function (record) {
        //     this.addForm.reset();
        this.closeAddForm();
        this.fieldSets.push(record);
        this.setFormGroups();
        this.form.markAsDirty();
    };
    EditProfileTimelineFormComponent.prototype.gatherFieldSets = function (value) {
        var fieldSets = [];
        var category = this.tabName;
        for (var key in value) {
            fieldSets.push(value[key]);
        }
        fieldSets.forEach(function (item) {
            if (category === 'educations') {
                item.university = item.organization;
                item.qualification = item.title;
            }
            if (category === 'works') {
                item.enterprise = item.organization;
                item.position = item.title;
            }
            delete item.organization;
            delete item.title;
        });
        return fieldSets;
    };
    EditProfileTimelineFormComponent.prototype.cancelValidation = function (form, fieldTitle) {
        form.get(fieldTitle).markAsUntouched();
    };
    EditProfileTimelineFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            for (var key in this.form.controls) {
                this.form.controls[key].markAsTouched(); // this shows validation notification
            }
            return;
        }
        this.employee[this.tabName] = this.gatherFieldSets(value);
        this.form.reset();
        this.fieldSets = [];
        this.employeeToUpdate.emit(this.employee);
    };
    EditProfileTimelineFormComponent.prototype.cancel = function () {
        var _this = this;
        if (this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then(function (result) {
                if (result) {
                    _this.form.reset();
                    _this.fieldSets = [];
                    _this.onCancel.emit();
                }
            });
        }
        else {
            this.form.reset();
            this.fieldSets = [];
            this.onCancel.emit();
        }
    };
    EditProfileTimelineFormComponent.prototype.showConfirmDialog = function (message) {
        return this._confirmService.activate(message);
    };
    return EditProfileTimelineFormComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditProfileTimelineFormComponent.prototype, "tabName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EditProfileTimelineFormComponent.prototype, "employee", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileTimelineFormComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileTimelineFormComponent.prototype, "employeeToUpdate", void 0);
EditProfileTimelineFormComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-timeline-form',
        templateUrl: 'edit-profile-timeline-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        confirm_service_1.ConfirmService])
], EditProfileTimelineFormComponent);
exports.EditProfileTimelineFormComponent = EditProfileTimelineFormComponent;
//# sourceMappingURL=edit-profile-timeline-form.component.js.map