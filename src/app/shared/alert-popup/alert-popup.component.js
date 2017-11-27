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
var alert_popup_service_1 = require("shared/alert-popup/alert-popup.service");
var AlertPopupComponent = (function () {
    function AlertPopupComponent(_alertPopupService) {
        this._alertPopupService = _alertPopupService;
        this.isOpen = false;
    }
    AlertPopupComponent.prototype.ngOnInit = function () {
        this._okButton = document.getElementById('ok-alert-button');
        this._closeButton = document.getElementById('close-alert-button');
        this._alertPopupService.activate = this.activate.bind(this);
    };
    AlertPopupComponent.prototype.activate = function (message) {
        var _this = this;
        this.message = message;
        return new Promise(function (resolve) {
            _this.isOpen = true;
            _this._okButton.onclick = function () {
                _this.isOpen = false;
                resolve(true);
            };
            _this._closeButton.onclick = function (event) {
                event.stopPropagation();
                _this.isOpen = false;
                resolve(false);
            };
        });
    };
    return AlertPopupComponent;
}());
AlertPopupComponent = __decorate([
    core_1.Component({
        selector: 'alert-popup',
        templateUrl: 'alert-popup.component.html'
    }),
    __metadata("design:paramtypes", [alert_popup_service_1.AlertPopupService])
], AlertPopupComponent);
exports.AlertPopupComponent = AlertPopupComponent;
//# sourceMappingURL=alert-popup.component.js.map