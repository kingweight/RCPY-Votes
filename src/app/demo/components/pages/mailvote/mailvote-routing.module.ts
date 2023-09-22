import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailVoteComponent } from './mailvote.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MailVoteComponent }
    ])],
    exports: [RouterModule]
})
export class MailVoteRoutingModule { }
