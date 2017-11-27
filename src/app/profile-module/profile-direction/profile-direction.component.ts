import { Component, Input } from '@angular/core';

import { Direction } from 'shared/models/direction-model';

@Component({
    selector: 'profile-direction',
    templateUrl: 'profile-direction.component.html',
    styleUrls: ['profile-direction.component.scss']
})

export class ProfileDirectionComponent {
    @Input() direction: Direction;
}

