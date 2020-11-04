import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../shared/http/http.service';

const dataType = [];
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private messageSource = new BehaviorSubject(<any>[]);
  currentMessage = this.messageSource.asObservable();

  constructor(public httpClient: HttpService) { }

  changeMessage(message) {

    this.httpClient.get('project?clientName=' + message)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.messageSource.next(resp);
        }
      )
  }
}
