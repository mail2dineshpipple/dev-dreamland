import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Observable, of } from 'rxjs';
import { FLIGHTMODE, SEARCH } from 'src/app/core/constants';
import { Airport } from 'src/app/core/model/airport';
import { OrderBy } from 'src/app/core/model/search';
import { Search } from 'src/app/core/model/search-view-model';
import { CommonService } from 'src/app/core/services/common.service';
import { DataShareService } from 'src/app/core/services/data-share.service';
import { OnewaylistComponent } from 'src/app/shared/components/onewaylist/onewaylist.component';
import { FilterComponent } from 'src/app/shared/modal/filter/filter.component';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  search: Search = {} as Search;
  airports: Airport[] = [];
  isLive:boolean;

  flightType : any = 'OneWay';
  CabinType : any = 'Economy';
  selectFrom: any;
  selectTo: any;
  Departure: any;
  Return: any;
  travellerCabin: boolean = false;
  public adultCounter: number = 0;
  public childCounter: number = 0;
  public infantCounter: number = 0;
  public Traveller: number = 0;

  
  flightList = [
    {Name: 'Delhi', Code: '(DEL)', Airport: 'Indira Gandhi International Airport', Country: 'IN'},
    {Name: 'Mumbai', Code: '(BOM)', Airport: 'Netaji Subhash Chandra Bose  Airport', Country: 'IN'},
    {Name: 'Bangalore', Code: '(BLR)', Airport: 'Bangaluru International Airport', Country: 'IN'},
    {Name: 'Kolkata', Code:'(CCU)', Airport: 'Netaji Subhash Chandra Bose  Airport', Country: 'IN'},
    {Name: 'Delhi', Code:'(DEL)', Airport: 'Indira Gandhi International Airport', Country: 'IN'},
    {Name: 'Bangalore', Code:'(BLR)', Airport: 'Bangaluru International Airport', Country: 'IN'},
    {Name: 'Mumbai', Code:'(BOM)',Airport: 'Netaji Subhash Chandra Bose  Airport', Country: 'IN'},
    {Name: 'Kolkata', Code:'(CCU)',Airport: 'Netaji Subhash Chandra Bose  Airport', Country: 'IN'},
  ];
  peopleLoading = false;
  isShow = false;
  isShow2 = false;
  selectedFareType = '1';
  selectedType = '1';
  sidePanel = false;
  checkboxArr:any=[];
  roundtripArr: any = [
    {id: 1, departure: 'DEL - BLR', date: '21 Sep', flghtImg: 'assets/images/6E.gif', time: '08:10 - 10:15', amount:'₹7712', isActive: true},
    {id: 2, departure: 'BLR - DEL', date: '23 Sep', flghtImg: 'assets/images/6E.gif', time: '14.25 - 16:50', amount:'₹7712'},
  ];
  selectedRoundtripTab = 0;
  isSearchModify = true;
  isResponsiveMode = false;
  @ViewChild('oneWay') oneWay:OnewaylistComponent

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    public commonService: CommonService,
    public dataShareService:DataShareService
  ) {}

  customSearchFn(term: string, item: Airport) {
    term = term.toLowerCase();
    return item.City.toLowerCase().indexOf(term) > -1 || item.City.toLowerCase().indexOf(term) > -1;
  }
  
  departureDate(){
    this.oneWay.initializeCalendar();
  }

  ngOnInit(): void {

    this.search = {} as Search;

    this.search =  JSON.parse(localStorage.getItem(SEARCH)!) ;
    this.search.orderBy =  OrderBy.Cheapest;

    this.commonService.getAirportList().subscribe({
      next: (response: Airport[]) => {
        this.airports = response;
        this.peopleLoading = false;
      }
    })

    this.dataShareService.verifyLiveDataStatus.subscribe({
      next:(value: boolean) =>{
        this.isLive = value;
      }
    })


    if (localStorage.getItem(FLIGHTMODE)) {
      this.flightType = localStorage.getItem(FLIGHTMODE);
      this.flightType = JSON.parse(this.flightType);
    }
    // let url = location.href;
    // if (!url.includes('flights')) {
    //   let body = document.body;
    //   body.classList.remove("bgImage");
    // }
    
    this.selectFrom = this.flightList[0];
    this.selectTo = this.flightList[1];

    this.breakpointObserver
    .observe(['(max-width: 768px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.isSearchModify = false;
        this.isResponsiveMode = true;
        this.selectedRoundtripTab = 1;
      } else {
        this.isSearchModify = true;
        this.isResponsiveMode = false;
        this.selectedRoundtripTab = 0;
      }
    });
  }


  showTravellerCabin(index) {
    this.search.segment[index].showTravel = this.search.segment[index].showTravel == true ? false : true;
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

  fromChange(event:any) {
    this.selectFrom = event;
  }

  toChange(event:any) {
    this.selectTo = event;
  }

  // increment(data:any) {
  //   if (data === 'adult') {
  //     this.adultCounter += 1;
  //   } else if (data === 'child') {
  //     this.childCounter += 1;
  //   } else if (data = 'infant') {
  //     this.infantCounter += 1;
  //   }
  //   this.Traveller = this.adultCounter + this.childCounter + this.infantCounter;
  //   console.log('this.Traveller: ', this.Traveller);
  // }

  // decrement(data:any) {
  //   if (data === 'adult') {
  //     this.adultCounter -= 1;
  //   } else if (data === 'child') {
  //     this.childCounter -= 1;
  //   } else if (data === 'infant') {
  //     this.infantCounter -= 1;
  //   }
  //   this.Traveller = this.adultCounter + this.childCounter + this.infantCounter;
  // }

  onClick() {
    this.travellerCabin = !this.travellerCabin;
  }

  onSelect(event: Airport, type, index) {
    debugger;
    if (event) {
      if (type === 'From') {
        this.search.segment[index].fromAirport = event.Name;
        this.search.segment[index].fromCity = event.City;
        this.search.segment[index].fromCityCode = event.Code;
        this.isShow = false;
      } else {
        this.search.segment[index].toAirport = event.Name;
        this.search.segment[index].toCity = event.City;
        this.search.segment[index].toCityCode = event.Code;
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

  fairePriceByDate(date) {
    return 100;
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

  gotoNext() {
    console.log('this.flightType: ', this.flightType);
    localStorage.setItem(FLIGHTMODE, JSON.stringify(this.flightType));
    this.router.navigate(['flightList']);
  }

  onSidepanel(type) {
    this.sidePanel = type;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FilterComponent, {
     panelClass:"filterModal"
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }

  changeCheckbox(event) {
    console.log(event)
    let index = this.checkboxArr.findIndex(f => f === event);
    if (index !== -1) {
      this.checkboxArr.splice(index, 1);
    } else {
      this.checkboxArr.push(event);
    }
  }

  roundtripTab(item) {
    console.log('item: ', item);
    this.roundtripArr.forEach(el => {
      if (el?.id === item?.id) {
        el.isActive = true;
        this.selectedRoundtripTab = el.id;
      } else {
        el.isActive = false;
      }
      return el;
    });
  }

  showSearchModify(type) {
    if (this.isResponsiveMode) {
      this.isSearchModify = type;
    }
    localStorage.setItem(SEARCH, JSON.stringify(this.search));
    this.oneWay.fetchSearchFlights();
    this.isLive = this.oneWay.searchResult.isLive;
    
    this.oneWay.verifiveLiveData().subscribe({
      next:(value:boolean) => {
        this.isLive = value;
        console.log("isLive ",value)
      },
      error:(error:any) =>{
        console.log("error ",error)
      }
    })  
  }


}