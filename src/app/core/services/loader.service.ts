import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderSource  = new BehaviorSubject(false);
  loaderStatus =  this.loaderSource.asObservable();

  constructor() { }

  showLoader(status:boolean){
    this.loaderSource.next(status)
  }
}
