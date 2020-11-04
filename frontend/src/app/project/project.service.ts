import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public httpClient: HttpService) { }

  list(data?) {
    return this.httpClient.get('project' + data);
  }

  leadList(data?) {
    return this.httpClient.get('lead' + data);
  }

  add(data) {
    return this.httpClient.post('project', data, {})
  }

  update(url, data) {
    return this.httpClient.put('project/' + url, data, {})
  }


}

