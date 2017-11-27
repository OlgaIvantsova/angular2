import { NgModule }           from '@angular/core';
import { SharedModule }       from 'shared/shared.module';

import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileLanguageComponent } from './profile-language/profile-language.component';
import { ProfileSkillComponent } from './profile-skill/profile-skill.component';
import { ProfileDirectionComponent } from './profile-direction/profile-direction.component';
import { ProfileTimelineComponent } from './profile-timeline/profile-timeline.component';
import { ProfileTimelineItemComponent } from './profile-timeline-item/profile-timeline-item.component';
import { ProfileProjectsComponent } from './profile-projects/profile-projects.component';

import { EditProfileModule } from './edit-profile-module/edit-profile.module';

import { routing } from './profile.routing';

@NgModule({
    imports: [
        SharedModule,
        EditProfileModule,
        routing
    ],
    declarations: [
        ProfileContainerComponent,
        ProfileComponent,
        ProfileLanguageComponent,
        ProfileSkillComponent,
        ProfileDirectionComponent,
        ProfileTimelineComponent,
        ProfileTimelineItemComponent,
        ProfileProjectsComponent
    ]

})

export class ProfileModule { }