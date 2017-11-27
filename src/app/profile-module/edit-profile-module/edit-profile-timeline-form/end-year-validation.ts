import { AbstractControl } from '@angular/forms';

export const endYearValidation = (control: AbstractControl): {[key: string]: boolean} => {
    const endYear = control.get('endYear');
    const startYear = control.get('startYear');
    if (!endYear || !startYear) return null;
    return (endYear.value >= startYear.value) ? null : { endYearIsLess: true };
};