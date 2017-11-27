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
var end_year_validation_1 = require("../end-year-validation");
var EditProfileTimelineAddComponent = (function () {
    function EditProfileTimelineAddComponent(fb) {
        this.fb = fb;
        this.closeAddForm = new core_1.EventEmitter();
        this.addRecord = new core_1.EventEmitter();
        this.yearsArr = [];
    }
    EditProfileTimelineAddComponent.prototype.ngOnInit = function () {
        this.setYearsArr();
        this.addForm = this.fb.group({
            title: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
            organization: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(32)]],
            description: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(500)]],
            startYear: ['', [forms_1.Validators.required]],
            endYear: ['', [forms_1.Validators.required]]
        }, { validator: end_year_validation_1.endYearValidation });
    };
    EditProfileTimelineAddComponent.prototype.cancel = function () {
        this.addForm.reset();
        this.closeAddForm.emit();
    };
    EditProfileTimelineAddComponent.prototype.cancelValidation = function (form, fieldTitle) {
        form.get(fieldTitle).markAsUntouched();
    };
    EditProfileTimelineAddComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            for (var key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched(); // this shows validation notification
            }
            return;
        }
        this.addRecord.emit(this.addForm.value);
    };
    EditProfileTimelineAddComponent.prototype.setYearsArr = function () {
        for (var i = 1995; i <= new Date().getFullYear(); i++) {
            this.yearsArr.push(i);
        }
    };
    return EditProfileTimelineAddComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileTimelineAddComponent.prototype, "closeAddForm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditProfileTimelineAddComponent.prototype, "addRecord", void 0);
EditProfileTimelineAddComponent = __decorate([
    core_1.Component({
        selector: 'edit-profile-timeline-add',
        templateUrl: 'edit-profile-timeline-add.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], EditProfileTimelineAddComponent);
exports.EditProfileTimelineAddComponent = EditProfileTimelineAddComponent;
//# sourceMappingURL=edit-profile-timeline-add.component.js.map