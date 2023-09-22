import { Component,OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
    templateUrl: './earlyvote.component.html',
    styleUrls: ['./earlyvote.scss']
})
export class EarlyVoteComponent implements OnInit {

    events1: any[] = [];

    events2: any[] = [];
A
    ngOnInit() {
        this.events1 = [
            { status: 'Day1', date: 'Sat, October 28, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#9C27B0', description: ' ' },
            { status: 'Day2', date: 'Sun, October 29, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#673AB7', description: ' ' },
            { status: 'Day3', date: 'Wed, October 30, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#FF9800', description: ' ' },
            { status: 'Day4', date: 'Thu, October 31, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#607D8B', description: ' ' },
            { status: 'Day5', date: 'Sat, November 1, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#8BC34A', description: ' ' },
            { status: 'Day6', date: 'Wed, November 2, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#3F51B5', description: ' ' },
            { status: 'Day7', date: 'Thu, November 3, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#9E9E9E', description: ' ' },
            { status: 'Day8', date: 'Sat, November 4, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#795548', description: ' ' },
            { status: 'Day9', date: 'Sat, November 5, 2023 | 9:00 AM - 5:00 PM', icon: PrimeIcons.CIRCLE_FILL, color: '#FF5722', description: ' ' },
        ];

        this.events2 = [
            "2020", "2021", "2022", "2023"
        ];
    }

}
