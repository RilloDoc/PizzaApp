import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-list',
  imports: [CommonModule],
  templateUrl: './time-list.component.html',
  styleUrls: ['./time-list.component.scss', '../app.time_list.scss'],
})
export class TimeListComponent implements OnInit {
  times: string[] = [
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
  ];

  constructor() {}

  ngOnInit(): void {}
}
