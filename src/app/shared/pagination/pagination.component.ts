import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PagesService } from 'shared/pages.service';

@Component({
    selector: 'profile-pagination',
    templateUrl: 'pagination.component.html'
})

export class PaginationComponent {
    @Input() pageSize: number;
    @Input() allItems: number;
    pages: number[] =[];
    pager: any = {};
    @Output() pagedItems = new EventEmitter<number[]>();

    constructor(
        private _pagesService: PagesService
    ) {}

    ngOnInit() {
        this.pager = this._pagesService.getPager(this.allItems, 1, this.pageSize);
    }

    setPage(page: number) {
        console.log(page, this.pager.totalPages);
        if(!page || page > this.pager.totalPages) return;
        this.pager = this._pagesService.getPager(this.allItems, page, this.pageSize);//last argument - number of items to display

        this.pagedItems.emit([this.pager.startIndex, this.pager.endIndex]);
    }

}