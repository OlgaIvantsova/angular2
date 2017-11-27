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
var router_1 = require("@angular/router");
var HomePageBannerComponent = (function () {
    function HomePageBannerComponent(_router) {
        this._router = _router;
        this.employees = [];
    }
    HomePageBannerComponent.prototype.onSearch = function (name, toolName) {
        var tools;
        var fullName;
        var path;
        name = name.trim().toLowerCase();
        fullName = name.split(' ');
        path = "names=";
        fullName.forEach(function (item) {
            path = "" + path + item + "?";
        });
        if (toolName) {
            toolName = toolName.trim().toLowerCase();
            tools = toolName.split(' ');
            path = path + "&tools=";
            tools.forEach(function (item) {
                path = "" + path + item + "?";
            });
        }
        this._router.navigate(['/search', { request: path }]);
    };
    return HomePageBannerComponent;
}());
HomePageBannerComponent = __decorate([
    core_1.Component({
        selector: 'home-page-banner',
        templateUrl: 'home-page-banner.component.html',
        styleUrls: ['home-page-banner.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomePageBannerComponent);
exports.HomePageBannerComponent = HomePageBannerComponent;
//# sourceMappingURL=home-page-banner.component.js.map