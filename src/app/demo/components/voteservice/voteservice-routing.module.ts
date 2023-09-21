import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'ballotproposals', loadChildren: () => import('./ballotproposals/ballotproposals.module').then(m => m.BallotproposalsModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class VoteServiceRoutingModule { }
