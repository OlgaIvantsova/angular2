import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Work } from 'shared/models/work-model';
import { Education } from 'shared/models/education-model';

@Component({
    selector: 'profile-timeline',
    templateUrl: 'profile-timeline.component.html',
    styleUrls: ['profile-timeline.component.scss']
})

export class ProfileTimelineComponent implements OnInit{
    @Input() works: Work[];
    @Input() educations: Education[];
    @Output() onEdit = new EventEmitter<string>();

    ngOnInit() {
        this.sortTimeLines();
    }

    ngOnChanges() {
        this.sortTimeLines();
    }

    sortTimeLines() {
        this.works.sort( (a,b) => {
            return b.endYear - a.endYear;
        });
        this.educations.sort( (a,b) => {
            return b.endYear - a.endYear;
        });
    }

    edit(category: string) {
        this.onEdit.emit(category);
    }

}