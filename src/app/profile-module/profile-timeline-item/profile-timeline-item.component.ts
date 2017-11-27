import {Component, Input, OnInit} from '@angular/core';
import { Work } from '../../shared/models/work-model';
import { Education } from 'shared/models/education-model';

@Component({
    selector: 'profile-timeline-item',
    templateUrl: 'profile-timeline-item.component.html'
})

export class ProfileTimelineItemComponent implements OnInit{
    @Input() item: Work | Education;
    endYear: string | number;

    ngOnInit() {
        this.endYear = this.item.endYear;
        if(this.endYear == Infinity) {
            this.endYear = 'current';
        }
    }

}