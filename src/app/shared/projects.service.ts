import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Project } from './models/project-model';

@Injectable()

export class ProjectsService {
    private url = `${API_URL}projects`;

    constructor(
        private _http: Http
    ) {}

    getProjects(): Observable<Project[]> { //get ordered by startDate projects
        return this._http.get(this.url)
            .map((r: Response) => r.json() as Project[] );
    }

    getProjectBy(key: string, value: string) {
        return this._http.get(`${this.url}?${key}=${value}`)
            .map((r: Response) => r.json() as Project[] );
    }

}