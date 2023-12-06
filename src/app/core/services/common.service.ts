import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { HOLIDAYURL } from "../constants";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Airport } from "../model/airport";
import { map } from "rxjs/operators";


@Injectable()
export class CommonService {
    private isSidebar = new Subject<any>();
    private airportListUrl:string = "/assets/data/airports.json"


    constructor(
    private router: Router,
    private httpClient: HttpClient
    ) {

    }

    setSidebar(isOpen: boolean) {
        this.isSidebar.next(isOpen);
    }

    getSidebar(): Observable<any> {
        return this.isSidebar.asObservable();
    }

    clearSidebar(isOpen: boolean) {
        this.isSidebar.next();
    }

    openUrl(url?) {
        if (url) {
            location.href = url;
        } else {
            location.href = HOLIDAYURL;
        }
    }

    openInnerPage(param) {
        this.router.navigate([param]);
    }

    getAirportList():Observable<Airport[]> {
        return this.httpClient.get<Airport[]>(this.airportListUrl).pipe(map(m=> {
            return m.sort((a,b) => {
                if (b.City < a.City) return 1;
                if (b.City > a.City) return -1;
                return 0;
              });
        }));
    }
  
}
