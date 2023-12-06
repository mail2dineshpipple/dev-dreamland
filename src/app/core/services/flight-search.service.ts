import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SearchRequest } from '../model/search';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { SearchResult } from '../model/search-result';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  fetchFlightSearchResult(search: SearchRequest) : Observable<SearchResult> {
    return this.httpClient.get<SearchResult>(this.baseUrl + "assets/data/search-result.json").pipe(
      map((response: any) => {
        return response;
      }));
  }

}
