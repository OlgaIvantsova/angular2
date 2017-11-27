"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PagesService = (function () {
    function PagesService() {
    }
    PagesService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        var totalPages = Math.ceil(totalItems / pageSize);
        var startPage, endPage;
        if (totalPages <= pageSize) {
            startPage = 1; //if less than pageSize total pages so all
            endPage = totalPages;
        }
        else {
            // if totalPages are more than pageSize
            if (currentPage <= pageSize / 2) {
                startPage = 1;
                endPage = totalPages;
            }
            else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - pageSize - 1;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 2;
                endPage = currentPage + 3;
            }
        }
        // calculate start and end item indexes of elements that are displayed
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        var pages = [];
        for (var i = 1; i < endPage + 1; i++) {
            pages.push(i);
        }
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagesService;
}());
PagesService = __decorate([
    core_1.Injectable()
], PagesService);
exports.PagesService = PagesService;
//# sourceMappingURL=pages.service.js.map