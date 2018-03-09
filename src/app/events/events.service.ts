import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {EventsModel} from './events.model';

@Injectable()
export class EventsService {

  private futureEvents: Array<EventsModel>;
  private pastEvents: Array<EventsModel>;

  constructor(private http: Http) {
  }

  async getAllCountdownEvents(): Promise<EventsModel[]> {
    const apiurl = 'https://www.googleapis.com/calendar/v3/calendars/';
    const calendarid = 'rglaeklvfaqil7mr0cgt7g6k9o@group.calendar.google.com';
    const apikey = 'AIzaSyClWoaRWkxfwxicbclPz054p-9mnH_5d94';
    const url = apiurl + calendarid + '/events?key=' + apikey;

    try {
      const res = await this.http.get(url).toPromise();
      const items = res.json().items;

      const ret = [];

      items.map(item => {
        const e = new EventsModel();
        e.name = item.summary;
        e.dueDate = new Date(item.start.date);
        e.created = new Date(item.created);
        e.creatorEmail = item.creator.email;
        e.creatorName = item.creator.displayName;
        e.complete = item;
        ret.push(e);
      });

      return ret;

    } catch (e) {
      console.log(e);
      return [];
    }
  }
}


