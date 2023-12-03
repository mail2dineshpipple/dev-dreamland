import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { FLIGHTMODE, ISFLEXI, SEARCH } from 'src/app/core/constants';
import { Cabin, FairType, FlightType } from 'src/app/core/enum/enums';
import { Airport } from 'src/app/core/model/airport';
import { Search } from 'src/app/core/model/search-view-model';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search: Search = {} as Search;
  airports: Airport[] = [];

  peopleLoading = true;
  isShow = false;
  isShow2 = false;

  constructor(
    private router: Router,
    public commonService: CommonService,
  ) { }

  customSearchFn(term: string, item: Airport) {
    term = term.toLowerCase();
    return item.City.toLowerCase().indexOf(term) > -1 || item.City.toLowerCase().indexOf(term) > -1;
  }

  ngOnInit(): void {

    this.commonService.getAirportList().subscribe({
      next: (response: Airport[]) => {
        this.airports = response;
        this.initializeSearch();
        this.peopleLoading = false;
      }
    })
  }

  initializeSearch() {
    this.search.flightType = FlightType.RoundWay;
    this.search.faireType = FairType.DoctorAndNurse;
    this.search.segment = [];

    this.addSegment();
    this.addSegment();
  }

  addSegment() {
    let defaultFrom = this.airports.filter(f => f.City == 'Delhi')[0];
    let defaultTo = this.airports.filter(f => f.City == 'Mumbai')[0];
    let date = new Date();
    let date2 = new Date(date.setDate(3));

    this.search.segment.push({
      fromAirport: defaultFrom.Name,
      fromCity: defaultFrom.City,
      toAirport: defaultTo.Name,
      toCity: defaultTo.City,
      fromDate: new NgbDate(date.getFullYear(), date.getMonth() + 1, date.getDate()),
      toDate: new NgbDate(date2.getFullYear(), date2.getMonth() + 1, date2.getDate()),
      showTravel:false,
      travelAndCabin: {
        adult: 1,
        cabin: Cabin.PremEconomy,
        children: 1,
        infants: 1
      },
    })

  }

  removeSegment(index: number) {
    this.search.segment.splice(index, 1)
  }


  increment(data: any, index: number) {
    if (data === 'adult') {
      this.search.segment[index].travelAndCabin!.adult +=1;
    } else if (data === 'child') {
      this.search.segment[index].travelAndCabin!.children +=1;
    } else if (data = 'infant') {
      this.search.segment[index].travelAndCabin!.infants +=1;
    }
  }

  decrement(data: any, index:number) {
    if (data === 'adult') {
      this.search.segment[index].travelAndCabin!.adult -=1;
    } else if (data === 'child') {
      this.search.segment[index].travelAndCabin!.children -=1;
    } else if (data === 'infant') {
      this.search.segment[index].travelAndCabin!.infants -=1;
    }
  }

  showTravellerCabin(index) {
    this.search.segment[index].showTravel = this.search.segment[index].showTravel == true ? false : true;
  }

  fairePriceByDate(date) {
    return 100;
  }

  onSelect(event: Airport, type, index) {
    if (event) {
      if (type === 'From') {
        this.search.segment[index].fromAirport = event.Name;
        this.search.segment[index].fromCity = event.City;
        this.isShow = false;
      } else {
        this.search.segment[index].toAirport = event.Name;
        this.search.segment[index].toCity = event.City;
        this.isShow2 = false;
      }
    }
  }

  ontest(type) {
    if (type === 'From') {
      this.isShow = true;
      this.isShow2 = false;
    } else {
      this.isShow = false;
      this.isShow2 = true;
    }
  }

  onReverse(index:number) {
    let airport=  this.search.segment[index].fromAirport;
    let city=  this.search.segment[index].fromCity;
    let fromDate=  this.search.segment[index].fromDate;

    this.search.segment[index].fromAirport = this.search.segment[index].toAirport;
    this.search.segment[index].fromCity = this.search.segment[index].toCity;
    this.search.segment[index].fromDate = this.search.segment[index].toDate;

    this.search.segment[index].toAirport =  airport;
    this.search.segment[index].toCity =  city;
    this.search.segment[index].fromDate =  fromDate;

  }

  searchSegments() {
    localStorage.setItem(SEARCH, JSON.stringify(this.search));
    this.router.navigate(['flightList']);
  }

  selectFlexi(val) {
    console.log('val: ', val);
    if (val) {
      this.search.isFlexi = val?.source?._checked;
    }
  }
}