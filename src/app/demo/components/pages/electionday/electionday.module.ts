import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElectionDayRoutingModule } from './electionday-routing.module';
import { ElectionDayComponent } from './electionday.component';

@NgModule({
    imports: [
        CommonModule,
        ElectionDayRoutingModule
    ],
    declarations: [ElectionDayComponent]
})
export class ElectionDayModule { }
