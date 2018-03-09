import {Component, Input, OnInit} from '@angular/core';
import {EventsModel} from '../events/events.model';

@Component({
  selector: 'app-hall-of-fame-enty',
  templateUrl: './hall-of-fame-entry.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameEntryComponent implements OnInit{

  @Input() event: EventsModel

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  ngOnInit(): void {
    this.calculateTimeDifference();
  }



  calculateTimeDifference(): void {
    let timeRemaining = this.event.dueDate.getTime() + this.event.dueDate.getTimezoneOffset() - Date.now();
    timeRemaining += 1000 * 60 * 60 * 24;
    timeRemaining -= 1000 * 60 * 60;

    this.seconds = Math.floor((timeRemaining / 1000) % 60);
    this.minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    this.hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  }
}
