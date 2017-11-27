import { Tool } from './tool-model';
import { Language } from './language-model';
import { Education } from './education-model';
import { Work} from './work-model';

export interface Person {
    id: number;
    departmentId: number;
    projectIds: number[];
    currentProjectIds: number[];
    name: string;
    surname: string;
    languages: Language[];
    foto: string;
    tools: Tool[];
    directions: string[];
    position: string;
    educations?: Education[];
    works?: Work[];
}