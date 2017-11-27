import { SubCategory } from './subcategory-model';

export class Project implements SubCategory{
    id: number;
    title: string;
    startDate: number;
    status: string;
    employeesAmount?: number;
    tools?: string[];
    rate?: number;
    description?: string;
}