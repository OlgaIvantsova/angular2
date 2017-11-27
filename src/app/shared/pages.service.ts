import { Injectable } from '@angular/core';

@Injectable()

export class PagesService {

    getPager(totalItems: number, currentPage: number, pageSize: number) {
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        if (totalPages <= pageSize) {
            startPage = 1; //if less than pageSize total pages so all
            endPage = totalPages;
        } else {
            // if totalPages are more than pageSize
            if (currentPage <= pageSize/2) {
                startPage = 1;
                endPage = totalPages;
            } else if (currentPage + 2 >= totalPages) {
                startPage = totalPages - pageSize -1;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 3;
            }
        }

        // calculate start and end item indexes of elements that are displayed
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages: number[] = [];
        for(let i=1; i < endPage + 1; i++) {
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
    }
}