import {OnInit, Component} from '@angular/core';

import { AlertPopupService } from 'shared/alert-popup/alert-popup.service';

@Component({
    selector: 'alert-popup',
    templateUrl: 'alert-popup.component.html'
})

export class AlertPopupComponent implements OnInit {
    isOpen: boolean = false;
    message: string;

    private _closeButton: any;
    private _okButton: any;

    constructor(
        private _alertPopupService: AlertPopupService
    ) {}

    ngOnInit() {
        this._okButton = document.getElementById('ok-alert-button');
        this._closeButton = document.getElementById('close-alert-button');

        this._alertPopupService.activate = this.activate.bind(this);
    }

    activate(message: string) {
        this.message = message;
        return new Promise<boolean>( resolve => {

            this.isOpen = true;

            this._okButton.onclick = () => {
                this.isOpen = false;
                resolve(true);
            };

            this._closeButton.onclick = (event: Event) => {
                event.stopPropagation();

                this.isOpen = false;
                resolve(false);
            };

        });
    }

}