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
var ProfileTimelineComponent = (function () {
    function ProfileTimelineComponent() {
        this.onEdit = new core_1.EventEmitter();
    }
    ProfileTimelineComponent.prototype.ngOnInit = function () {
        this.sortTimeLines();
    };
    ProfileTimelineComponent.prototype.ngOnChanges = function () {
        this.sortTimeLines();
    };
    ProfileTimelineComponent.prototype.sortTimeLines = function () {
        this.works.sort(function (a, b) {
            return b.endYear - a.endYear;
        });
        this.educations.sort(function (a, b) {
            return b.endYear - a.endYear;
        });
    };
    ProfileTimelineComponent.prototype.edit = function (category) {
        this.onEdit.emit(category);
    };
    return ProfileTimelineComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ProfileTimelineComponent.prototype, "works", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ProfileTimelineComponent.prototype, "educations", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProfileTimelineComponent.prototype, "onEdit", void 0);
ProfileTimelineComponent = __decorate([
    core_1.Component({
        selector: 'profile-timeline',
        templateUrl: 'profile-timeline.component.html',
        styleUrls: ['profile-timeline.component.scss']
    })
], ProfileTimelineComponent);
exports.ProfileTimelineComponent = ProfileTimelineComponent;
//# sourceMappingURL=profile-timeline.component.js.map