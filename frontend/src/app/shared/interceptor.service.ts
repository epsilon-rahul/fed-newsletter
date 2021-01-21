import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //you may wish to modify the request
    console.log('going to the http server now...')
    // return next.handle(req).do(evt => {
    //   if (evt instanceof HttpResponse) {
    //     console.log('came back from server now...')
    //   }

    // });
    let token = sessionStorage.getItem('x-auth-token');
    if (!token) {
      return next.handle(req);
    }
    const newReq = req.clone({
      headers: new HttpHeaders({
        'x-auth-token': token
      })
    });

    return next.handle(newReq);
  }

}
