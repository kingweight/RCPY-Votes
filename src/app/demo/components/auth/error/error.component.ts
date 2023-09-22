import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})
export class ErrorComponent { 
 
    steps: MenuItem[];
    middleName: string = '';
    lastName: string = '';
    firstName: string = '';
    step = 1;
    parties;
    selectedCity: string | undefined;
    activeIndex: number = 0;
    residenseFlag: string;

    residenseOption: any[];

    ngOnInit() {
        this.parties = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
        this.residenseOption = [
            { name: 'Yes', key: 'hasResidense' },
            { name: 'No', key: 'noResidense' }
        ];
        this.steps = [
            {
                label: 'Eligibility',
                disabled: false,
                command: (e) =>{console.error(e)},
                styleClass: "acbssd"
            },
            {
                label: 'About You',
                routerLink: 'seat',
                disabled: true
            },
            {
                label: 'Address',
                routerLink: 'payment',
                disabled: true
            },
            {
                label: 'Confirmation',
                routerLink: 'confirmation',
                disabled: true
            }
        ];
        this.residenseFlag = 'hasResidense';
    }

    changeResidenseOption (residenseFlag: string) {
        this.residenseFlag = residenseFlag;
    }

    nextStep(step:number) {
        this.step = step;
        if (step === 2) {
            this.steps[0]
        }
    }

}