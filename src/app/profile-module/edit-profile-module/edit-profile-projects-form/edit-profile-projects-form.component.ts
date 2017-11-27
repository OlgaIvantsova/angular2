import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Employee } from 'shared/models/employee-model';
import { Project } from 'shared/models/project-model';

import { ProjectsService } from 'shared/projects.service';
import { ConfirmService } from 'shared/confirm/confirm.service';
import { AlertPopupService } from 'shared/alert-popup/alert-popup.service';

@Component({
    selector: 'edit-profile-projects-form',
    templateUrl: 'edit-profile-projects-form.component.html'
})

export class EditProfileProjectsComponent implements OnInit {
    @Input() employee: Employee;
    @Input() tabName: string;
    @Output() onCancel = new EventEmitter();
    @Output() employeeToUpdate = new EventEmitter<Employee>();
    form: FormGroup;
    addForm: FormGroup;
    projects: Project[];
    allProjects: Project[] = [];

    constructor(
        private fb: FormBuilder,
        private _projectsService: ProjectsService,
        private _confirmService: ConfirmService,
        private _alertPopupService: AlertPopupService
    ) {}

    ngOnInit() {
        this._projectsService.getProjects()
            .subscribe( (projects: Project[])=> {
                this.allProjects = projects.slice();

                this.projects = projects.filter( (item: Project) => {
                    return this.employee.projectIds.indexOf(item.id) !== -1;
                });
                this.setFormGroups();
            });

    }

    setFormGroups() {
        let group: any = {};

        this.projects.forEach( (item: Project) => {
            group[item.title] = [ item.title, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]]
        });
        this.form = this.fb.group(group);

        this.addForm = this.fb.group({
            selectTitle: ['', [Validators.required]]
        });
    }

    convertProjects() {
        this.employee['projectIds'] = this.projects.map( (project: Project) => {
            return project.id;
        });
    }

    cancelValidation(form: FormGroup, fieldTitle: string) {
        form.get(fieldTitle).markAsUntouched();
    }

    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        this.convertProjects();

        this.form.reset();
        this.projects = [];
        this.employeeToUpdate.emit(this.employee);
    }

    cancel() {
        if(this.form.dirty) {
            this.showConfirmDialog('Do you really want to cancel changes?')
                .then( (result) => {
                    if(result) {
                        this.form.reset();
                        this.projects = [];
                        this.onCancel.emit();
                    }
                });
        } else {
            this.form.reset();
            this.projects = [];
            this.onCancel.emit();
        }
    }

    add({ value, valid }: { value: any, valid: boolean }) {
        if(!valid) {
            for(let key in this.addForm.controls) {
                this.addForm.controls[key].markAsTouched();// this shows validation notification
            }
            return;
        }
        if(value.selectTitle) {
            let isPresent = this.projects.find( (item: Project) => {
                return item.title === value.selectTitle;
            });
            if(isPresent) {
                return this.showNotification('The employee already has this project!');
            }
            let newProject = this.allProjects.filter( (item: Project) => {
                return item.title === value.selectTitle;
            })[0];
            this.projects.push(newProject);
            this.setFormGroups();
            this.form.markAsDirty();
        }
    }

    remove(project: Project) {
        this.showConfirmDialog('Do you really want to remove the project?')
            .then( (result: boolean) => {
                if(result) {
                    this.projects = this.projects.filter( (item: Project) => {
                        return item.id !== project.id;
                    });
                    this.form.markAsDirty();
                    this.form.removeControl(project.title);
                }
        });
    }

    showConfirmDialog(message: string): Promise<boolean> {
        return this._confirmService.activate(message);
    }

    showNotification(message: string): Promise<boolean> {
        return this._alertPopupService.activate(message);
    }


}