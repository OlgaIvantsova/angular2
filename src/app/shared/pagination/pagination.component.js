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
var pages_service_1 = require("shared/pages.service");
var PaginationComponent = (function () {
    function PaginationComponent(_pagesService) {
        this._pagesService = _pagesService;
        this.pages = [];
        this.pager = {};
        this.pagedItems = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.pager = this._pagesService.getPager(this.allItems, 1, this.pageSize);
    };
    PaginationComponent.prototype.setPage = function (page) {
        console.log(page, this.pager.totalPages);
        if (!page || page > this.pager.totalPages)
            return;
        this.pager = this._pagesService.getPager(this.allItems, page, this.pageSize); //last argument - number of items to display
        this.pagedItems.emit([this.pager.startIndex, this.pager.endIndex]);
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "pageSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "allItems", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pagedItems", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'profile-pagination',
        templateUrl: 'pagination.component.html'
    }),
    __metadata("design:paramtypes", [pages_service_1.PagesService])
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map