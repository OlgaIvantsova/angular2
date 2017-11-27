import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from 'shared/models/employee-model';

@Component({
    selector: 'edit-profile-container',
    templateUrl: 'edit-profile-container.component.html',
    styleUrls: ['edit-profile-sky-forms.component.scss', 'edit-profile-custom-forms.component.scss']
})

export class EditProfileContainerComponent {
    @Input() employee: Employee;
    @Input() categoryToEdit: string;
    @Output() closeForm = new EventEmitter();
    @Output() saveChanges = new EventEmitter<Employee>();
    tabs: any[] = [
        {
            idProp: 'general',
            displayedTitle: 'General info'
        },
        {
            idProp: 'tools',
            displayedTitle: 'Skills'
        },
        {
            idProp: 'languages',
            displayedTitle: 'Foreign languages'
        },
        {
            idProp: 'educations',
            displayedTitle: 'Education'
        },
        {
            idProp: 'works',
            displayedTitle: 'Experience'
        },
        {
            idProp: 'directions',
            displayedTitle: 'Development directions'
        },
        {
            idProp: 'projects',
            displayedTitle: 'Projects'
        }
    ];

    ngOnInit() {
        this.setCategoryToEdit(this.categoryToEdit);
    }

    setCategoryToEdit(category: string) {
        this.categoryToEdit = category;
    }

    cancel() {
        this.closeForm.emit();
    }

    onSave(employee: Employee) {
        this.saveChanges.emit(employee);
    }


}