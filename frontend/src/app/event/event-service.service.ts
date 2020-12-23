import { Injectable } from '@angular/core';
import { HttpService } from "../shared/http/http.service";

@Injectable({
  providedIn: 'root'
})

export class EventServiceService {
  constructor(public httpClient: HttpService) {}

  addEvent(data) {
      return this.httpClient.post('events', data, {});
  }

  getEvents(){
      return this.httpClient.get('events');
  }

  deleteEvent(id) {
      return this.httpClient.delete('events/' + id);
  }
}