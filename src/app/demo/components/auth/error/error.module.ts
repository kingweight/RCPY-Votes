import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { StepsModule } from 'primeng/steps';


@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        ButtonModule,
        CalendarModule,
        RadioButtonModule,
        FormsModule,
        DropdownModule,
        StepsModule
    ],
    declarations: [ErrorComponent]
})
export class ErrorModule {
    


}
