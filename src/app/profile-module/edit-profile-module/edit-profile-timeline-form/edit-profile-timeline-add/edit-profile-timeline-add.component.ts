import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { endYearValidation } from '../end-year-validation';
import { TimelineInfo } from '../timeline-model';

@Component({
    selector: 'edit-profile-timeline-add',
    templateUrl: 'edit-profile-timeline-add.component.html'
})

export class EditProfileTimelineAddComponent implements OnInit{
    @Output() closeAddForm = new EventEmitter();
    @Output() addRecord = new EventEmitter<TimelineInfo>();
    addForm: FormGroup;
    yearsArr: number[] = [];

    constructor(
        private fb: FormBuilder
    ) {}

    ngOnInit() {
        this.setYearsArr();

        this.addForm = this.fb.group({
            title: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
            organization: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
            description: [ '', [Validators.required, Validators.minLength(2), Validators.maxLength(500)]],
            startYear: [ '', [Validators.required]],
            endYear: [ '', [Validators.required]]
        }, { validator: endYearValidation});
    }

    cancel() {
        this.addForm.reset();
        this.closeAddForm.emit();
    }

    cancelValidation(form: FormGroup, fieldTitle: string) {
        form.get(fieldTitle).markAsUntouched();
    }

    onSubmit({ value, valid }: { value: TimelineInfo[], valid: boolean }) {
        if(!valid) {
            for(let key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched();// this shows validation notification
            }
            return;
        }
        this.addRecord.emit(this.addForm.value);
    }

    setYearsArr() {
        for(let i = 1995; i<= new Date().getFullYear(); i++) {
            this.yearsArr.push(i);
        }
    }

}