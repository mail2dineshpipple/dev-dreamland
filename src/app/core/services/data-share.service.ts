import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private verifyLiveData = new BehaviorSubject(false);
  verifyLiveDataStatus = this.verifyLiveData.asObservable();

  constructor() { }

  setVerifyLiveDataStatus(status:boolean){
    this.verifyLiveData.next(status);
  }
  
}
