import { NgModule }           from '@angular/core';
import { SharedModule }       from 'shared/shared.module';

import { EditProfileContainerComponent } from './edit-profile-container/edit-profile-container.component';
import { EditProfileGeneralFormComponent } from './edit-profile-general-form/edit-profile-general-form.component';
import { EditProfileLevelsFormComponent } from './edit-profile-levels-form/edit-profile-levels-form.component';
import { EditProfileTimelineFormComponent } from './edit-profile-timeline-form/edit-profile-timeline-form.component';
import { EditProfileTimelineAddComponent } from './edit-profile-timeline-form/edit-profile-timeline-add/edit-profile-timeline-add.component';
import { EditProfileDirectionComponent } from './edit-profile-direction-form/edit-profile-direction-form.component';
import { EditProfileProjectsComponent } from './edit-profile-projects-form/edit-profile-projects-form.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        EditProfileContainerComponent,
        EditProfileGeneralFormComponent,
        EditProfileLevelsFormComponent,
        EditProfileTimelineFormComponent,
        EditProfileTimelineAddComponent,
        EditProfileDirectionComponent,
        EditProfileProjectsComponent
    ],
    declarations: [
        EditProfileContainerComponent,
        EditProfileGeneralFormComponent,
        EditProfileLevelsFormComponent,
        EditProfileTimelineFormComponent,
        EditProfileTimelineAddComponent,
        EditProfileDirectionComponent,
        EditProfileProjectsComponent
    ]
})

export class EditProfileModule { }