import { Direction } from './direction-model';
import { Tool } from './tool-model';
import { Language } from './language-model';
import { Person } from './person-model';
import { Education } from './education-model';
import { Work } from './work-model';

export class Employee {
    id: number;
    departmentId: number;
    projectIds: number[];
    currentProjectIds: number[];
    name: string;
    surname: string;
    languages: Language[];
    foto: string;
    tools: Tool[];
    directions: Direction[];
    position: string;
    educations?: Education[];
    works?: Work[];

    constructor(person: Person) {
        this.id = person.id;
        this.departmentId = person.departmentId;
        this.projectIds = person.projectIds;
        this.currentProjectIds = person.currentProjectIds;
        this.name = person.name;
        this.surname = person.surname;
        this.languages = person.languages;
        this.foto = person.foto;
        this.tools = person.tools;
        this.directions = person.directions.map( item => {
                let newItem = new Direction();
                newItem.title = item;
                return newItem;
        });
        this.position = person.position;
        this.educations = person.educations;
        this.works = person.works;
    }
}