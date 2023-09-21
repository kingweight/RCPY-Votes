import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            // {
            //     label: 'Landing',
            //     items: [
            //         { label: 'Landing', icon: 'pi pi-fw pi-globe', routerLink: ['/landing']},
            //     ]
            // },
            {
                label: 'Meet the Candidates',
                items: [
                    { label: 'Candidates Info', icon: 'pi pi-fw pi-eye', routerLink: ['/candidate/panel'], badge: 'NEW' },
                    { label: 'Ballot Info', icon: 'pi pi-fw pi-image', routerLink: ['/candidate/media'] },
                    { label: 'Volunteer Info', icon: 'pi pi-fw pi-book', routerLink: ['/pages/timeline'] },
                    { label: 'Search Candidates', icon: 'pi pi-fw pi-bookmark', routerLink: ['/candidate/video'] },
                ]
            },
            {
                label: 'Your Votes',
                items: [
                    { label: 'Your Votes', icon: 'pi pi-fw pi-file', routerLink: ['/pages/crud'] },
                ]
            },
            {
                label: 'Vote Services',
                items: [
                    {
                        label: 'Why Vote', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'What is at Stake', icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            {
                                label: 'Elected Offices', icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            {
                                label: 'Types of Elections', icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            {
                                label: 'Ballot Proposals', icon: 'pi pi-fw pi-bookmark',
                               
                            }
                        ]
                    },
                    {
                        label: 'FAQ', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Learn how to use', icon: 'pi pi-fw pi-bookmark',
                                routerLink: ['/pages/usage']
                            },
                            {
                                label: 'Elected Offices', icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            {
                                label: 'Types of Elections', icon: 'pi pi-fw pi-bookmark',
                               
                            },
                            {
                                label: 'Ballot Proposals', icon: 'pi pi-fw pi-bookmark',
                                routerLink:['/voteservice/ballotproposals']
                               
                            }
                        ]
                    },
                    { label: 'Contact US', icon: 'pi pi-fw pi-image', routerLink: ['/pages/contactus'] }
                ]
            },
            {
                label: 'Award and Points',
                items: [
                    { label: 'Award', icon: 'pi pi-fw pi-eye', routerLink: ['/pages/award'], badge: 'NEW' },
                    { label: 'Points', icon: 'pi pi-fw pi-image', routerLink: ['/pages/point'] }
                   
                ]
            },
            {
                label: 'Personal',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Personal Info',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/candidate/list']
                            },
                            { 
                                label: 'Register', 
                                icon: 'pi pi-fw pi-exclamation-circle', 
                                routerLink: ['/candidate/invalidstate'] 
                            }
                        ]
                    },
                ]
            }
        ];
    }
}