import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ElectionDayComponent } from './electionday.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ElectionDayComponent }
    ])],
    exports: [RouterModule]
})
export class ElectionDayRoutingModule { }
