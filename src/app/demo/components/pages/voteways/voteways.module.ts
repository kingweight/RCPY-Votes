import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteWaysRoutingModule } from './voteways-routing.module';
import { VoteWaysComponent } from './voteways.component';

@NgModule({
    imports: [
        CommonModule,
        VoteWaysRoutingModule
    ],
    declarations: [VoteWaysComponent]
})
export class VoteWaysModule { }
