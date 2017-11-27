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
var language_level_enum_ts_1 = require("../../shared/levels/language-level-enum.ts");
var language_model_1 = require("shared/models/language-model");
var ProfileLanguageComponent = (function () {
    function ProfileLanguageComponent() {
        this.radius = 35;
    }
    ProfileLanguageComponent.prototype.ngOnInit = function () {
        this.level = language_level_enum_ts_1.LanguageLevel[this.language.level];
        this.circumference = 2 * 3.14 * this.radius;
        this.emptyLength = this.circumference * (100 - this.level) / 100;
        this.spinnerLength = this.circumference - this.emptyLength;
        this.circleLength = this.spinnerLength + " " + this.emptyLength;
    };
    return ProfileLanguageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", language_model_1.Language)
], ProfileLanguageComponent.prototype, "language", void 0);
ProfileLanguageComponent = __decorate([
    core_1.Component({
        selector: 'profile-language',
        templateUrl: 'profile-language.component.html',
        styleUrls: ['profile-language.component.scss']
    })
], ProfileLanguageComponent);
exports.ProfileLanguageComponent = ProfileLanguageComponent;
//# sourceMappingURL=profile-language.component.js.map