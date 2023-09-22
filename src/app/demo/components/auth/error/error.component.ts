import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../service/auth.service';


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
    suffix: string = '';
    phone;
    email;
    birthDate;
    gender;
    driverLicense;
    socialSecurityNum;
    step = 1;
    parties;
    selectedCity: any;
    activeIndex: number = 0;
    residenseFlag: string;
    selectedCountryLive;
    unitNumber;
    unitType;
    streetAddress2;
    selectedParty: any;
    streetAddress;
    zipCode;
    selectedMunicipality;
    maillingAddr;
    maillingCity;
    maillingState;
    maillingZip;
    password;

    residenseOption: any[];

    constructor(public authervice: AuthService) { }

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
                //routerLink: 'seat',
                //disabled: true
            },
            {
                label: 'Address',
                //routerLink: 'payment',
                //disabled: true
            },
            {
                label: 'Confirmation',
                //routerLink: 'confirmation',
                //disabled: true
            }
        ];
        this.residenseFlag = 'hasResidense';
    }

    changeResidenseOption (residenseFlag: string) {
        this.residenseFlag = residenseFlag;
    }

    preStep(step:number) {
        this.step = step;
        this.activeIndex -= 1;
    }

    nextStep(step:number) {
        this.step = step;
        this.activeIndex += 1;
    }

    submit() {
        let reqBody:any = {};
        reqBody.firstName = this.firstName;
        reqBody.middleName = this.middleName;
        reqBody.lastName = this.lastName;
        reqBody.suffix = this.suffix;
        reqBody.phone = this.phone;
        reqBody.email = this.email;
        reqBody.birthDate = this.birthDate;
        reqBody.gender = this.gender;
        reqBody.padriver = this.driverLicense;
        reqBody.socialSecurity = this.socialSecurityNum;
        reqBody.city = this.selectedCity.name;
        reqBody.residenseFlag = this.residenseFlag;
        reqBody.politicalParty = this.selectedParty.name;
        reqBody.selectedCountryLive = this.selectedCountryLive;
        reqBody.unitNumber = this.unitNumber;
        reqBody.unitType = this.unitType;
        reqBody.streetAddress2 = this.streetAddress2;
        reqBody.streetAddress1 = this.streetAddress;
        reqBody.zipCode = this.zipCode;
        reqBody.selectedMunicipality = this.selectedMunicipality;
        reqBody.maillingAddr = this.maillingAddr;
        reqBody.maillingCity = this.maillingCity;
        reqBody.maillingState = this.maillingState;
        reqBody.maillingZip = this.maillingZip;
        reqBody.password = this.password;
        reqBody.citizenUS = true;
        reqBody.age18 = true;
        reqBody.reasonToRegister = '';
        reqBody.votingAssistance = true;
        reqBody.declaration = true;
        reqBody.pollWorker = true;
        reqBody.annualBallot = true;
        reqBody.mailInBallot = true;
        console.log(reqBody);

        this.authervice.register(reqBody).then((res:any) => {
            console.log(res);
        })
    }

}