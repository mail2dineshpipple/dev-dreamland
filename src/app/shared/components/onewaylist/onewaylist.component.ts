import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ISFLEXI } from 'src/app/core/constants';
import { Options } from '@angular-slider/ngx-slider';
import { Time } from '@angular/common';
import { Search } from 'src/app/core/model/search-view-model';
import { PriceWithDate } from 'src/app/core/model/price-with-date';
import { FlightType } from 'src/app/core/enum/enums';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Flight, Journey, SearchResult } from 'src/app/core/model/search-result';
import { FlightSearchService } from 'src/app/core/services/flight-search.service';
import { SearchRequest } from 'src/app/core/model/search';
import * as moment from 'moment';

@Component({
  selector: 'app-onewaylist',
  templateUrl: './onewaylist.component.html',
  styleUrls: ['./onewaylist.component.scss'],
})
export class OnewaylistComponent implements OnInit {

  @Input() search: Search;
  searchResult:SearchResult ;
  priceWithDates: PriceWithDate[] = [];


  selectedType = '1';
  panelOpenState = false;
  flightClOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    items: 8,
    margin: 0,
    responsive: {
      0: {
        items: 1
      },
      340: {
        items: 2
      },
      499: {
        items: 3
      },
      768: {
        items: 8
      },
      992: {
        items: 8
      },
    },
    nav: true
  };

  minValue: number = 17000;
  maxValue: number = 48000;
  option1: Options = {
    floor: 17000,
    ceil: 48000,
    minRange: 100
  };

  lowValue: number = 2.20;
  highValue: number = 12.30;
  option2: Options = {
    floor: 2.20,
    ceil: 12.30,
    minRange: 1
  };

  stop: any = [
    { id: 0, title: '0', type: 'Non-Stop', price: '₹4444' },
    { id: 1, title: '1', type: 'Stop', price: '₹4444' },
    { id: 2, title: '2+', type: 'Stop', price: '₹4444' },
  ];

  timingList: any = [
    { id: 1, title: 'Before 6AM', type: '₹4321', img: 'assets/images/night_inactive.png', img1: 'assets/images/night_active.png' },
    { id: 2, title: '6AM-12PM', type: '₹4321', img: 'assets/images/morning_inactive.webp', img1: 'assets/images/morning_active.png' },
    { id: 3, title: '12PM-6PM', type: '₹4321', img: 'assets/images/noon_inactive.webp', img1: 'assets/images/noon_active.png' },
    { id: 4, title: 'After 6PM', type: '₹4321', img: 'assets/images/evening_inactive.png', img1: 'assets/images/evening_active.png' },
  ];

  timingList2: any = [
    { id: 1, title: 'Before 6AM', type: '₹4321', img: 'assets/images/night_inactive.png', img1: 'assets/images/night_active.png' },
    { id: 2, title: '6AM-12PM', type: '₹4321', img: 'assets/images/morning_inactive.webp', img1: 'assets/images/morning_active.png' },
    { id: 3, title: '12PM-6PM', type: '₹4321', img: 'assets/images/noon_inactive.webp', img1: 'assets/images/noon_active.png' },
    { id: 4, title: 'After 6PM', type: '₹4321', img: 'assets/images/evening_inactive.png', img1: 'assets/images/evening_active.png' },
  ];

  fareList: any = [
    {
      id: 1, btnVal: 1, fares: 'GoLite', prices: '₹ 2,267', p: '',
      child: [
        { img: 'assets/images/cabinbag.png', boldSpan: 'Cabin bag', span: '7 Kgs' },
        { img: 'assets/images/checkin.png', boldSpan: 'Check-in', span: '15Kgs' },
        { img: 'assets/images/redcancel.png', boldSpan: 'Cancellation', span: 'Non-refundable fare' },
        { img: 'assets/images/date.png', boldSpan: 'Date Change', span: 'Not allowed' },
        { img: 'assets/images/noseat.png', boldSpan: 'Seat', span: 'Chargeable' },
      ]
    },
    {
      id: 2, btnVal: 2, fares: 'GoFirst', prices: '₹ 2,581', p: '',
      child: [
        { img: 'assets/images/cabinbag.png', boldSpan: 'Cabin bag', span: '7 Kgs' },
        { img: 'assets/images/checkin.png', boldSpan: 'Check-in', span: '15Kgs' },
        { img: 'assets/images/redcancel.png', boldSpan: 'Cancellation', span: 'Non-refundable fare' },
        { img: 'assets/images/date.png', boldSpan: 'Date Change', span: 'Date Change Fee starting ₹ 2,500' },
        { img: 'assets/images/noseat.png', boldSpan: 'Seat', span: 'Chargeable' },
      ]
    },
    {
      id: 3, btnVal: 3, fares: 'GoFlexi', prices: '₹ 3,277', p: '',
      child: [
        { img: 'assets/images/cabinbag.png', boldSpan: 'Cabin bag', span: '7 Kgs' },
        { img: 'assets/images/checkin.png', boldSpan: 'Check-in', span: '15Kgs' },
        { img: 'assets/images/redcancel.png', boldSpan: 'Cancellation', span: 'Cancellation Fee starting ₹ 3,000' },
        { img: 'assets/images/date.png', boldSpan: 'Date Change', span: 'Free date change allowed' },
        { img: 'assets/images/noseat.png', boldSpan: 'Seat', span: 'Free seats available' },
        { img: 'assets/images/meal.png', boldSpan: 'Meal', span: 'Complimentary meals' },
      ]
    },
    {
      id: 4, btnVal: 4, fares: 'GoMore', prices: '₹ 9,825', p: 'Fly stress free! Keep the middle seat vacant with GoMore.',
      child: [
        { img: 'assets/images/other.png', boldSpan: 'Other', span: '1st / 2nd row window or aisle seat included, with vacant middle seat' },
        { img: 'assets/images/cabinbag.png', boldSpan: 'Cabin bag', span: '7 Kgs' },
        { img: 'assets/images/checkin.png', boldSpan: 'Check-in', span: '15Kgs' },
        { img: 'assets/images/redcancel.png', boldSpan: 'Cancellation', span: 'Cancellation Fee starting ₹ 6,000' },
        { img: 'assets/images/date.png', boldSpan: 'Date Change', span: 'Date Change Fee starting ₹ 5,000' },
        { img: 'assets/images/noseat.png', boldSpan: 'Seat', span: 'Free seats available' },
      ]
    },
    {
      id: 5, btnVal: 5, fares: 'SME Fare', prices: '₹ 3,146', p: '',
      child: [
        { img: 'assets/images/cabinbag.png', boldSpan: 'Cabin bag', span: '7 Kgs' },
        { img: 'assets/images/checkin.png', boldSpan: 'Check-in', span: '15Kgs' },
        { img: 'assets/images/redcancel.png', boldSpan: 'Cancellation', span: 'Cancellation Fee starting ₹ 1,500' },
        { img: 'assets/images/date.png', boldSpan: 'Date Change', span: 'Free date change allowed' },
        { img: 'assets/images/noseat.png', boldSpan: 'Seat', span: 'Free seats available' },
        { img: 'assets/images/meal.png', boldSpan: 'Meal', span: 'Complimentary meals' },
      ]
    },
  ]

  flightList: any = [
    { id: 1, isFares: true }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },
  ];
  isFlexi: any;

  @Output()
  onClickCheckbox: EventEmitter<any> = new EventEmitter<any>()
  checkboxValue: any;

  constructor(
    private router: Router,
    private flightSearchService: FlightSearchService
  ) { 

  }

  dateDiff(startDate:Date, endDate:Date): string {

    const date = moment();
        let dateInFormat = date.format('YYYY.M.D');
        console.log(dateInFormat);

        let startDateObj =  moment(startDate);
        let endDateObj =  moment(endDate);
        
        var duration = moment.duration(endDateObj.diff(startDate));

      return duration.hours() + "h : " + duration.minutes() + "m" ;

  }

  stops(flight: Flight[]): string{

    switch(flight.length){
      case 1:
        return "Non Stop"
      default:
        return flight.length + " Stop"
    }
  }

  ngOnInit(): void {

    this.initializeCalendar();
    this.fetchSearchFlights();

    // console.log( this.dateDiff('2023-12-12 07:05:00.000','2023-12-12 08:50:00.000'))

    let url = location.href;
    if (!url.includes('flights')) {
      let body = document.body;
      body.classList.remove("bgImage");
    }

    if (localStorage.getItem(ISFLEXI)) {
      this.isFlexi = localStorage.getItem(ISFLEXI);
      this.isFlexi = JSON.parse(this.isFlexi);
    }
  }

  source(flight: Flight[]):Flight {
    return flight.filter(f=> f.key == 0)[0]
  }

  destination(flight: Flight[]):Flight {
    let keys = flight.map(m=> m.key);
    return flight.filter(f=> f.key == Math.max.apply(Math,keys))[0]
  }

  fetchSearchFlights(){
    this.flightSearchService.fetchFlightSearchResult({} as SearchRequest).subscribe({
      next:(response: SearchResult )=> {
        this.searchResult = response;
      }
    })
  }

  oneWayCalendarDate() {
    this.priceWithDates = [];

    for (let index = 0; index < 12; index++) {
      let priceWithDateItem = {} as PriceWithDate;
      let date = new Date(this.search.segment[0].fromDate.year, this.search.segment[0].fromDate.month - 1, this.search.segment[0].fromDate.day);

      if( index <= 2){
        date.setDate(date.getDate() - (2-index));
      }else{
        date.setDate(date.getDate() + (index-2));
      }

      priceWithDateItem.Date = date
      priceWithDateItem.Price = Math.random() * 10000;
      this.priceWithDates.push(priceWithDateItem)

    }
  }

  initializeCalendar() {
    switch (this.search.flightType) {
      case FlightType.OneWay:
        // if(date != null){
        //   this.search.segment[0].fromDate = new NgbDate(date!.getFullYear(), date!.getMonth() + 1, date!.getDate());
        // }

        this.oneWayCalendarDate();
        break;
      default:
        this.oneWayCalendarDate();
        break;
    }

  }

  selectedCalendarDate(date:Date){
    // this.initializeCalendar(date);
    this.search.segment[0].fromDate = new NgbDate(date!.getFullYear(), date!.getMonth() + 1, date!.getDate());

    // debugger;
  }

  

  onSelect(item, type) {
    if (type === 'Departure') {
      this.timingList.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    } else if (type === 'Arrival') {
      this.timingList2.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    } else {
      this.stop.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    }
  }

  gotoNext(url) {
    this.router.navigate([url]);
  }


  // onSelect(item) {
  //   this.faqList.forEach(el => {
  //     if (item?.id === el?.id) {
  //       el.isActive = true;
  //     } else {
  //       el.isActive = false;
  //     }
  //     return el;
  //   });
  // }


  onChange(item: Journey) {
    // item.isActive = !item.isActive;
    item.displaySavingFaireType = !item.displaySavingFaireType
  }

  onCheckbox(event) {
    this.onClickCheckbox.emit(event)
  }
}
