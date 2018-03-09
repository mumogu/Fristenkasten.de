import {Component, OnInit} from '@angular/core';
import {selector} from 'rxjs/operator/publish';
import {EventsService} from '../events/events.service';
import {EventsModel} from '../events/events.model';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html'
})
export class HallOfFameComponent implements OnInit {

  public events: Array<EventsModel> = [];

  public constructor(private eventsService: EventsService) {
  }

  async ngOnInit() {
    this.events = await this.eventsService.getAllCountdownEvents();

    this.events.sort((a: EventsModel, b: EventsModel) => {
      if (a.dueDate < b.dueDate) {
        return 11;
      }
      if (a.dueDate > b.dueDate) {
        return -1;
      }
      return 0;
    });
  }
}

