import {OnInit, Component} from '@angular/core';

import {ConfirmService} from "shared/confirm/confirm.service";

@Component({
    selector: 'modal-confirm',
    templateUrl: 'confirm.component.html'
})

export class ConfirmComponent implements OnInit {
    isOpen: boolean = false;
    message: string;

    private _cancelButton: any;
    private _closeButton: any;
    private _okButton: any;

    constructor(
        private _confirmService: ConfirmService
    ) {}

    ngOnInit() {
        this._cancelButton = document.getElementById('cancel-confirm-button');
        this._okButton = document.getElementById('ok-confirm-button');
        this._closeButton = document.getElementById('close-confirm-button');

        this._confirmService.activate = this.activate.bind(this);
    }

    activate(message: string) {
        this.message = message;
        return new Promise<boolean>( resolve => {

            this.isOpen = true;

            this._cancelButton.onclick = () => {
                this.isOpen = false;
                resolve(false);
            };

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