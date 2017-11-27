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
var confirm_service_1 = require("shared/confirm/confirm.service");
var ConfirmComponent = (function () {
    function ConfirmComponent(_confirmService) {
        this._confirmService = _confirmService;
        this.isOpen = false;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
        this._cancelButton = document.getElementById('cancel-confirm-button');
        this._okButton = document.getElementById('ok-confirm-button');
        this._closeButton = document.getElementById('close-confirm-button');
        this._confirmService.activate = this.activate.bind(this);
    };
    ConfirmComponent.prototype.activate = function (message) {
        var _this = this;
        this.message = message;
        return new Promise(function (resolve) {
            _this.isOpen = true;
            _this._cancelButton.onclick = function () {
                _this.isOpen = false;
                resolve(false);
            };
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
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    core_1.Component({
        selector: 'modal-confirm',
        templateUrl: 'confirm.component.html'
    }),
    __metadata("design:paramtypes", [confirm_service_1.ConfirmService])
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map