import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    request =  request.clone({
      setHeaders:{
        "withCredentials":"true",
        "Allow-Origin":"*"
      }
    })

    console.log("Adding Access-Control-Allow-Origin")
    return next.handle(request);
  }
}
