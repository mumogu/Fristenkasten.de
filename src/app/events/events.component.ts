import {Component, OnInit} from '@angular/core';
import {EventsModel} from './events.model';
import {EventsService} from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: EventsModel[] = null;

  constructor(private countdownService: EventsService) {
  }

  async ngOnInit() {
    this.events = await this.countdownService.getAllCountdownEvents();

    this.events.sort((a: EventsModel, b: EventsModel) => {
      if (a.dueDate < b.dueDate) {
        return -1;
      }
      if (a.dueDate > b.dueDate) {
        return 1;
      }
      return 0;
    });
  }
}
