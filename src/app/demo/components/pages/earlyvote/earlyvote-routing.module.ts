import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EarlyVoteComponent } from './earlyvote.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EarlyVoteComponent }
    ])],
    exports: [RouterModule]
})
export class EarlyVoteRoutingModule { }
