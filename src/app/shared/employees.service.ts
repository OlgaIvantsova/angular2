import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Person } from './models/person-model';
import { Employee } from './models/employee-model';
import { SubCategory } from "./models/subcategory-model";

@Injectable()

export class EmployeesService {
    private url = `${API_URL}employees`;

    constructor(
        private _http: Http
    ) {}

    getEmployees(): Observable<Employee[]> {
        return this._http.get(this.url)
            .map((r: Response) => {
                let employees = r.json().map( (person: Person) => {
                    return new Employee(person);
                });
                return employees as Employee[];
            });
    }

    update(employee: Employee): Observable<Employee> {
        return this._http.put(`${this.url}/${employee.id}`, employee)
            .map((r: Response) => r.json() as Employee);
    }

    getSubCategories(prop: string) {
        return this.getEmployees()
            .map( employees => {
                var subCategories: string[] = [];
                employees.forEach( employee => {
                    employee[prop].forEach( (item: any )=> {
                        if(subCategories.indexOf(item.title) == -1) {
                            subCategories.push(item.title);
                        }
                    });
                });
                return subCategories.sort();
            });
    }

    getEmployeesBy(key: string, value: number | string): Observable<Employee[]> {
        if(key === 'departmentId') {
            return this._http.get(`${this.url}?${key}=${value}`)
                .map((r: Response) => r.json() as Employee[]);
        }
        return this.getEmployees()
            .map( (employees: Employee[]) => {
                employees = employees.filter( (employee: Employee) => {
                    return employee[key].some( (item: any) => {
                        return item.title === value;
                    });
                });
                return employees as Employee[];
            });
    }

    getEmployeesByProject(id: number) {
        return this.getEmployees()
            .map( employees => {
                return employees.filter( employee => {
                    return employee.projectIds.indexOf(id) !== -1;
                });
            });
    }

    getEmployeeById(id: number): Observable<Employee> {
        return this._http.get(`${this.url}/${id}`)
            .map((r: Response) => {
                return r.json() as Employee;
            });
    }

    getEmployeesByMultiFilter(arr: string[]) {
        return this.getEmployees()
            .map( (employees: Employee[]) => {
                return employees.filter ( (employee: Employee) => {
                    return this.arePresentValues(employee, arr); // check if employees have values
                });
            });
    }

    arePresentValues(employee: Employee, arr: string[]) {
        return arr.every( (item: string) => {
            let isPresent: boolean;
            for (let key in employee) {
                if (typeof employee[key] === 'string') {
                    isPresent = (employee[key].toLowerCase() === item);
                } else {
                    if(key !== 'tools' && key !== 'languages') continue;
                    isPresent = this.isPresentInSubCategory(employee[key], item);
                }
                if(isPresent) return isPresent;
            }
            return false;
        });
    }

    isPresentInSubCategory(subCategories: SubCategory[], value: string) {
        return subCategories.some( (subCategory: SubCategory) => {
            let isPresent: boolean;
            for (let prop in subCategory) {
                isPresent = subCategory[prop].toLowerCase() === value;
                if(isPresent) return isPresent;
            }
            return isPresent;
        });
    }


}