import { Injectable } from '@angular/core';

@Injectable()

export class AlertPopupService {
    activate: (message: string) => Promise<boolean>;
}