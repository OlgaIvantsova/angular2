import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Department } from './models/department-model';

@Injectable()

export class DepartmentsService {
    private url = `${API_URL}departments`;

    constructor(
        private _http: Http
    ) {}

    getDepartments(): Observable<Department[]> {
        return this._http.get(this.url)
            .map((r: Response) => r.json() as Department[] );
    }

    getDepartmentsBy(prop: string, value: string | number): Observable<Department[]> {
        return this._http.get(`${this.url}?${prop}=${value.toString()}`)
            .map((r: Response) => r.json() as Department[] );
    }

    getDepartmentById(id: number): Observable<Department> {
        return this._http.get(`${this.url}/${id}`)
            .map((r: Response) => r.json() as Department );
    }
}