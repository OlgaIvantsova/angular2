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
var employee_model_1 = require("shared/models/employee-model");
var EditProfileContainerComponent = (function () {
    function EditProfileContainerComponent() {
        this.closeForm = new core_1.EventEmitter();
        this.saveChanges = new core_1.EventEmitter();
        this.tabs = [
            {
                idProp: 'general',
                displayedTitle: 'General info'
            },
            {
                idProp: 'tools',
                displayedTitle: 'Skills'
            },
            {
                idProp: 'languages',
                displayedTitle: 'Foreign languages'
            },
            {
                idProp: 'educations',
                displayedTitle: 'Education'
            },
            {
                idProp: 'works',
                displayedTitle: 'Experience'
            },
            {
                idProp: 'directions',
                displayedTitle: 'Development directions'
            },
            {
                idProp: 'projects',
                displayedTitle: 'Projects'
            }
        ];
    }
    EditProfileContainerComponent.prototype.ngOnInit = function () {
        this.setCategoryToEdit(this.categoryToEdit);
    };
    EditProfileContainerComponent.prototype.setCategoryToEdit = function (category) {
        this.categoryToEdit = category;
    };
    EditProfileContainerComponent.prototype.cancel = function () {
        this.closeForm.emit();
    };
    EditProfileContainerComponent.prototype.onSave = function (employee) {
        this.saveChanges.emit(employee);
    };
    return EditProfileContainerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", employee_model_1.Employee)
], EditProfileContainerComponent.prototype, "employee", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditProfileContainerComponent.prototype, "categoryToEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileContainerComponent.prototype, "closeForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileContainerComponent.prototype, "saveChanges", void 0);
EditProfileContainerComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-container',
        templateUrl: 'edit-profile-container.component.html',
        styleUrls: ['edit-profile-sky-forms.component.scss', 'edit-profile-custom-forms.component.scss']
    })
], EditProfileContainerComponent);
exports.EditProfileContainerComponent = EditProfileContainerComponent;
//# sourceMappingURL=edit-profile-container.component.js.map