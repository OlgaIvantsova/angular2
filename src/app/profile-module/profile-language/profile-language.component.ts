import { Component, Input, OnInit } from '@angular/core';

import { LanguageLevel } from '../../shared/levels/language-level-enum.ts';
import { Language } from 'shared/models/language-model';

@Component({
    selector: 'profile-language',
    templateUrl: 'profile-language.component.html',
    styleUrls: ['profile-language.component.scss']
})

export class ProfileLanguageComponent implements OnInit {
    @Input() language: Language;
    radius = 35;
    spinnerLength: number;
    level: LanguageLevel;
    emptyLength: number;
    circumference: number;
    circleLength: string;

    ngOnInit() {
        this.level = LanguageLevel[this.language.level];
        this.circumference = 2 * 3.14 * this.radius;
        this.emptyLength = this.circumference * (100-this.level)/100;
        this.spinnerLength = this.circumference - this.emptyLength;
        this.circleLength = `${this.spinnerLength} ${this.emptyLength}`;
    }

}