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
var projects_service_1 = require("shared/projects.service");
var confirm_service_1 = require("shared/confirm/confirm.service");
var alert_popup_service_1 = require("shared/alert-popup/alert-popup.service");
var EditProfileProjectsComponent = (function () {
    function EditProfileProjectsComponent(fb, _projectsService, _confirmService, _alertPopupService) {
        this.fb = fb;
        this._projectsService = _projectsService;
        this._confirmService = _confirmService;
        this._alertPopupService = _alertPopupService;
        this.onCancel = new core_1.EventEmitter();
        this.employeeToUpdate = new core_1.EventEmitter();
        this.allProjects = [];
    }
    EditProfileProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._projectsService.getProjects()
            .subscribe(function (projects) {
            _this.allProjects = projects.slice();
            _this.projects = projects.filter(function (item) {
                return _this.employee.projectIds.indexOf(item.id) !== -1;
            });
            _this.setFormGroups();
        });
    };
    EditProfileProjectsComponent.prototype.setFormGroups = function () {
        var group = {};
        this.projects.forEach(function (item) {
            group[item.title] = [item.title, [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]];
        });
        this.form = this.fb.group(group);
        this.addForm = this.fb.group({
            selectTitle: ['', [forms_1.Validators.required]]
        });
    };
    EditProfileProjectsComponent.prototype.convertProjects = function () {
        this.employee['projectIds'] = this.projects.map(function (project) {
            return project.id;
        });
    };
    EditProfileProjectsComponent.prototype.cancelValidation = function (form, fieldTitle) {
        form.get(fieldTitle).markAsUntouched();
    };
    EditProfileProjectsComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.convertProjects();
        this.form.reset();
        this.projects = [];
        this.employeeToUpdate.emit(this.employee);
    };
    EditProfileProjectsComponent.prototype.cancel = function () {
        var _this = this;
        if (this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then(function (result) {
                if (result) {
                    _this.form.reset();
                    _this.projects = [];
                    _this.onCancel.emit();
                }
            });
        }
        else {
            this.form.reset();
            this.projects = [];
            this.onCancel.emit();
        }
    };
    EditProfileProjectsComponent.prototype.add = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            for (var key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched(); // this shows validation notification
            }
            return;
        }
        if (value.selectTitle) {
            var isPresent = this.projects.find(function (item) {
                return item.title === value.selectTitle;
            });
            if (isPresent) {
                return this.showNotification('The employee already has this project!');
            }
            var newProject = this.allProjects.filter(function (item) {
                return item.title === value.selectTitle;
            })[0];
            this.projects.push(newProject);
            this.setFormGroups();
            this.form.markAsDirty();
        }
    };
    EditProfileProjectsComponent.prototype.remove = function (project) {
        var _this = this;
        this.showConfirmDialog('Do you really want to remove the project?')
            .then(function (result) {
            if (result) {
                _this.projects = _this.projects.filter(function (item) {
                    return item.id !== project.id;
                });
                _this.form.markAsDirty();
                _this.form.removeControl(project.title);
            }
        });
    };
    EditProfileProjectsComponent.prototype.showConfirmDialog = function (message) {
        return this._confirmService.activate(message);
    };
    EditProfileProjectsComponent.prototype.showNotification = function (message) {
        return this._alertPopupService.activate(message);
    };
    return EditProfileProjectsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EditProfileProjectsComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditProfileProjectsComponent.prototype, "tabName", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileProjectsComponent.prototype, "onCancel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileProjectsComponent.prototype, "employeeToUpdate", void 0);
EditProfileProjectsComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-projects-form',
        templateUrl: 'edit-profile-projects-form.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        projects_service_1.ProjectsService,
        confirm_service_1.ConfirmService,
        alert_popup_service_1.AlertPopupService])
], EditProfileProjectsComponent);
exports.EditProfileProjectsComponent = EditProfileProjectsComponent;
//# sourceMappingURL=edit-profile-projects-form.component.js.map