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
var skills_level_enum_1 = require("shared/levels/skills-level-enum");
var ProfileSkillComponent = (function () {
    function ProfileSkillComponent() {
    }
    ProfileSkillComponent.prototype.ngOnInit = function () {
        this.level = skills_level_enum_1.SkillLevel[this.tool.level];
        this.width = this.level + "%";
    };
    return ProfileSkillComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProfileSkillComponent.prototype, "tool", void 0);
ProfileSkillComponent = __decorate([
    core_1.Component({
        selector: 'profile-skill',
        templateUrl: 'profile-skill.component.html',
        styleUrls: ['profile-skill.component.scss']
    })
], ProfileSkillComponent);
exports.ProfileSkillComponent = ProfileSkillComponent;
//# sourceMappingURL=profile-skill.component.js.map