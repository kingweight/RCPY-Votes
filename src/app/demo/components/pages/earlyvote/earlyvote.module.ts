import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EarlyVoteRoutingModule } from './earlyvote-routing.module';
import { EarlyVoteComponent } from './earlyvote.component';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
    imports: [
        CommonModule,
        TimelineModule,
        EarlyVoteRoutingModule,
        ButtonModule,
        CardModule
    ],
    declarations: [EarlyVoteComponent]
})
export class EarlyVoteModule { }
