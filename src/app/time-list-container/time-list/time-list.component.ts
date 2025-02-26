import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-list',
  imports: [CommonModule, FormsModule],
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
  @Input() selectedTime: string = '';

  @Output() timeChange = new EventEmitter<string | null>();

  onTimeChange(event: Event): void {
    const inputElement = event.target as HTMLSelectElement;
    if (inputElement) {
      this.timeChange.emit(inputElement.value);
    }
  }
  constructor() { }

  ngOnInit(): void { }
}
