import { Component } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
})
export class ErrorComponent { 

    step = 1;

    getStart() {
        this.step = 2;
    }

}