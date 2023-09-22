import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VoteWaysComponent } from './voteways.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: VoteWaysComponent }
    ])],
    exports: [RouterModule]
})
export class VoteWaysRoutingModule { }
