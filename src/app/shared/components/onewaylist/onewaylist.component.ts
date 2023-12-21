import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DISPLAYFILTERLIMIT, ISFLEXI } from 'src/app/core/constants';
import { ChangeContext, Options } from '@angular-slider/ngx-slider';
import { Time } from '@angular/common';
import { Search, Segment } from 'src/app/core/model/search-view-model';
import { PriceWithDate } from 'src/app/core/model/price-with-date';
import { Category, FlightType } from 'src/app/core/enum/enums';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Flight, Journey, SearchResult } from 'src/app/core/model/search-result';
import { FlightSearchService } from 'src/app/core/services/flight-search.service';
import { AdvanceSearch, GeneralInfo, OrderBy, PaxDetails, SearchRequest, Segments } from 'src/app/core/model/search';
import * as moment from 'moment';
import { Filters } from 'src/app/core/utils/popular-filter'
import { Filter, LayoverPoint } from 'src/app/core/model/filters';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FormControl } from '@angular/forms';
import { ItemsList } from '@ng-select/ng-select/lib/items-list';
import { Observable, of } from 'rxjs';
import { DataShareService } from 'src/app/core/services/data-share.service';

@Component({
  selector: 'app-onewaylist',
  templateUrl: './onewaylist.component.html',
  styleUrls: ['./onewaylist.component.scss'],
})
export class OnewaylistComponent implements OnInit {

  @Input() search: Search;
  searchResult: SearchResult;
  priceWithDates: PriceWithDate[] = [];
  filters: Filter[] = Filters;
  filterByCategory = Object.values;
  filterCategories = Category;
  showFilterLimit: number = 2;

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

  minPrice: number = 0;
  maxPrice: number = 1;
  priceOption: Options = {
    floor: 0,
    ceil: 48000,
    minRange: 1000
  };

  minDuration: number = 0;
  maxDuration: number = 1;

  durationOption: Options = {
    floor: 0,
    ceil: 300,
    minRange: 60
  };

  layOverViaPoint: LayoverPoint[] = [];

  displayShowMoreLimit = DISPLAYFILTERLIMIT;

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
    private flightSearchService: FlightSearchService,
    private loaderService: LoaderService,
    public dataShareService:DataShareService
  ) {

  }

  dateDiff(startDate: Date, endDate: Date): string {
    let startDateObj = moment(startDate);
    let endDateObj = moment(endDate);

    var duration = moment.duration(endDateObj.diff(startDateObj));

    return duration.hours() + "h : " + duration.minutes() + "m";
  }


  sortBy(orderBy: string) {
    this.search.orderBy = parseInt(orderBy);
    this.fetchSearchFlights();
  }

  stops(flight: Flight[]): string {

    switch (flight.length) {
      case 1:
        return "Non Stop"
      default:
        return flight.length - 1 + " Stop"
    }
  }

  addFilter(filter: Filter) {

    if (filter.isApplied) {
      this.search.filter = this.search.filter ?? [];
      this.search.filter.push(filter);
    } else {
      let index = this.search.filter.findIndex(f => f.name == filter.name);
      if (index > -1) {
        this.search.filter.splice(index, 1);
      }
    }

    this.fetchSearchFlights();
  }

  applyFilter(isChecked: boolean, id: number) {
    var index: number = this.filters.findIndex(f => f.id == id);
    this.filters[index].isApplied = isChecked;
    let name = this.filters[index].name;

    // if (!isChecked && this.search.filter != undefined && this.search.filter.length > 0) {
    //   // let index = this.search.filter.findIndex(f => f.name == name );
    //   // // let index = this.search.filter.findIndex(f => f.name == name );
    //   // if (index > -1) {
    //   //   this.search.filter.splice(index, 1);
    //   // // }
    // } else {

    //   // this.search.filter = this.search.filter ?? []
    //   // this.search.filter.push(this.filters[index])
    // }
    this.addFilter(this.filters[index])

  }

  filterBy(array: any[], property) {
    let arr = array.filter(f => f.category == property);
    return arr
  }

  ngOnInit(): void {

    this.initializeCalendar();
    this.fetchSearchFlights();

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

  source(flight: Flight[]): Flight {
    return flight.filter(f => f.key == 0)[0]
  }

  destination(flight: Flight[]): Flight {
    let keys = flight.map(m => m.key);
    return flight.filter(f => f.key == Math.max.apply(Math, keys))[0]
  }


  durationChange(changeContext: ChangeContext): void {
    this.minDuration = changeContext.value;
    this.maxDuration = changeContext.highValue!;
    this.fetchSearchFlights();
  }

  sliderOptionChange(changeContext: ChangeContext, filter: Filter): void {



    switch (filter.category) {
      case 'Price':
        filter.minValue = this.minPrice = changeContext.value;
        filter.maxValue = this.maxPrice = changeContext.highValue!;

        if (this.priceOption.ceil == filter.maxValue && this.priceOption.floor == filter.minValue) {
          filter.isApplied = false;
        } else {
          filter.isApplied = true;
        }
        break;
      case 'Duration':
        filter.minValue = this.minDuration = changeContext.value;
        filter.maxValue = this.maxDuration = changeContext.highValue!;

        if (this.durationOption.ceil == filter.maxValue && this.durationOption.floor == filter.minValue) {
          filter.isApplied = false;
        } else {
          filter.isApplied = true;
        }
        break
    }

    this.fetchSearchFlights();
  }


  showMore(filter: Filter) {
    this.filters.filter(f => f.category == filter.category).forEach(f => f.displayFilterLimit = 1000);
  }

  fetchSearchFlights() {

    let searchRequest = {} as SearchRequest;
    searchRequest.flightType = this.search.flightType;

    searchRequest.advanceSearch = {} as AdvanceSearch;
    searchRequest.advanceSearch.directFlight = false
    searchRequest.advanceSearch.isFlexi = false
    searchRequest.advanceSearch.maxStops = 0

    searchRequest.generalInfo = {} as GeneralInfo;
    searchRequest.generalInfo.cabin = 'EC';
    searchRequest.generalInfo.currency = 'INR';
    searchRequest.generalInfo.guid = '01c0010d-9f2e-45af-b8d7-424a33c0981d';
    searchRequest.generalInfo.journeyType = 'DOM';
    searchRequest.generalInfo.tripType = 'R';
    searchRequest.generalInfo.username = 'Test';
    searchRequest.generalInfo.password = 'Test1';

    searchRequest.paxDetails = {} as PaxDetails;
    searchRequest.paxDetails.adult = 1;
    searchRequest.paxDetails.child = 0;
    searchRequest.paxDetails.infant = 0;
    searchRequest.paxDetails.youth = 0;

    searchRequest.segments = [];

    for (let index = 0; index < this.search.segment.length; index++) {
      let segment: Segments = {} as Segments;
      segment.arrivalApt = this.search.segment[0].toCityCode;
      segment.departApt = this.search.segment[0].fromCityCode;
      let date = moment();
      date.month(this.search.segment[0].fromDate.month);
      date.date(this.search.segment[0].fromDate.day);
      date.year(this.search.segment[0].fromDate.year);
      segment.departDate = date.format('YYYY-MM-DD');

      searchRequest.segments.push(segment)

    }

    searchRequest.filter = [];
    if (this.search.orderBy == undefined) {
      searchRequest.orderBy = OrderBy.Cheapest;
    } else {
      searchRequest.orderBy = this.search.orderBy;
    }

    if (this.search.filter != null) {
      for (let index = 0; index < this.search.filter.length; index++) {
        searchRequest.filter.push(this.search.filter[index]);
      }
    }

    searchRequest.minPrice = this.minPrice;
    searchRequest.maxPrice = this.maxPrice;
    searchRequest.minDuration = this.minDuration;
    searchRequest.maxDuration = this.maxDuration;

    searchRequest.layOverViaPoint = [];

    let layOverFilter = this.filters.filter(f => f.category == "Layover Via Point" && f.isApplied)
    for (let index = 0; index < layOverFilter.length; index++) {
      if (layOverFilter[index].isApplied) {
        searchRequest.layOverViaPoint.push(layOverFilter[index].name)
      }
    }

    this.flightSearchService.fetchFlightSearchResult(searchRequest).subscribe({
      next: (response: SearchResult) => {
        this.searchResult = response;
        this.searchResult.isLive = response.isLive;
        this.verifiveLiveData()
        this.dataShareService.setVerifyLiveDataStatus(response.isLive)
        // this.disabledFilter()

 
        if (this.minPrice == 0 && this.maxPrice == 1) {
          let priceArray = response.onwardJourneys.map(m => m.fares.totalFare.total.amount);
          this.minPrice = Math.min.apply(Math, priceArray);
          this.maxPrice = Math.max.apply(Math, priceArray);

          const priceOptions: Options = Object.assign({}, this.priceOption);
          priceOptions.floor = this.minPrice;
          priceOptions.ceil = this.maxPrice;
          this.priceOption = priceOptions;
        }



        if (this.minDuration == 0 && this.maxDuration == 1) {
          let durationArray = response.onwardJourneys.map(m => m.totalFlyTime);

          this.minDuration = Math.min.apply(Math, durationArray);
          this.maxDuration = Math.max.apply(Math, durationArray);

          const durationOptions: Options = Object.assign({}, this.durationOption);
          durationOptions.floor = this.minDuration;
          durationOptions.ceil = this.maxDuration;
          this.durationOption = durationOptions;
        }

        this.addLayOverPoints(this.searchResult)

        let flighNames: string[] = [];
        this.searchResult.onwardJourneys.forEach(j => {
          j.flights.filter(f => {
            flighNames.push(f.carrier.name)
          });
        });
        flighNames = flighNames.filter((el, i, a) => i === a.indexOf(el))

        let lastId = Math.max.apply(Math, this.filters.map(f => f.id));

        for (let index = 0; index < flighNames.length; index++) {
          let filterObj: Filter = {
            id: (lastId++) + 1,
            name: flighNames[index],
            value: undefined,
            category: 'Preferred Airline',
            isPopular: false,
            isApplied: false,
            html: '',
            activeImg: '',
            inActiveImg: '',
            disabled: false,
            layOverPoints: undefined,
            minValue: 0,
            maxValue: 0,
            displayFilterLimit: DISPLAYFILTERLIMIT
          };

          let exists = this.filters.findIndex(f => f.name == filterObj.name)
          if (exists == -1) {
            this.filters.push(filterObj);
          }
        }

        this.oneWayCalendarDate()
      }
    })
  }

  applyLayOverPointFilter(isChecked: boolean, layoverPoint: Filter) {
    layoverPoint.isApplied = isChecked;
    this.fetchSearchFlights();

  }

  addLayOverPoints(searchResult: SearchResult) {
    let hasMoreThanOneStop = searchResult.onwardJourneys.filter(f => f.flights.length > 1);
    let lastId = Math.max.apply(Math, this.filters.map(f => f.id));

    for (let index = 0; index < hasMoreThanOneStop.length; index++) {

      for (let index2 = 0; index2 < hasMoreThanOneStop[index].flights.length; index2++) {
        if (index2 > 0) {
          let pointName = hasMoreThanOneStop[index].flights[index2].depDetail.name;
          if (this.filters.findIndex(f => f.name == pointName) == -1) {

            let filterObj: Filter = {
              id: (lastId++) + 1,
              name: pointName,
              value: undefined,
              category: 'Layover Via Point',
              isPopular: false,
              isApplied: false,
              html: '',
              activeImg: '',
              inActiveImg: '',
              disabled: false,
              layOverPoints: undefined,
              minValue: 0,
              maxValue: 0,
              displayFilterLimit: DISPLAYFILTERLIMIT
            };

            this.filters.push(filterObj);

            // this.layOverViaPoint.push({
            //   isApplied: false,
            //   LayoverPointName: pointName
            // })
          }

        }
      }
    }
  }

  groupBy(collection: any[], property: string) {

    if (!collection) {
      return [];
    }

    const groupedCollection = collection.reduce((previous, current) => {
      if (!previous[current[property]]) {
        previous[current[property]] = [current];
      } else {
        previous[current[property]].push(current);
      }
      return previous;
    }, {});


    // this will return an array of objects, each object containing a group of objects
    return Object.keys(groupedCollection).map(key => ({ key, value: groupedCollection[key] }));
  }

  oneWayCalendarDate() {

    const searchDate = new Date(this.search.segment[0].fromDate.year, this.search.segment[0].fromDate.month - 1, this.search.segment[0].fromDate.day);
    let lowestPrice = Math.min.apply(Math, this.searchResult.onwardJourneys.filter(f => f.fares.totalFare.total.amount).map(f => f.fares.totalFare.total.amount));


    this.priceWithDates = [];

    for (let index = 0; index < 12; index++) {
      let priceWithDateItem = {} as PriceWithDate;
      let date = new Date(this.search.segment[0].fromDate.year, this.search.segment[0].fromDate.month - 1, this.search.segment[0].fromDate.day);

      if (index <= 2) {
        date.setDate(date.getDate() - (2 - index));
      } else {
        date.setDate(date.getDate() + (index - 2));
      }

      priceWithDateItem.Date = date

      if (moment(searchDate).isSame(moment(date))) {
        priceWithDateItem.Price = lowestPrice;
      } else {
        priceWithDateItem.Price = (index+2) * lowestPrice;
      }

      this.priceWithDates.push(priceWithDateItem)
    }
  }

  initializeCalendar() {
    switch (this.search.flightType) {
      case FlightType.OneWay:
        // if(date != null){
        //   this.search.segment[0].fromDate = new NgbDate(date!.getFullYear(), date!.getMonth() + 1, date!.getDate());
        // }

        // this.oneWayCalendarDate();
        break;
      default:
        // this.oneWayCalendarDate();
        break;
    }

  }

  selectedCalendarDate(date: Date) {
    // this.initializeCalendar(date);
    this.search.segment[0].fromDate = new NgbDate(date!.getFullYear(), date!.getMonth() + 1, date!.getDate());

    // debugger;
  }


  modifyFilter(item: Filter) {
    item.isApplied = item.isApplied ? false : true;
    this.addFilter(item);
  }

  removeSingleFilter(item: Filter) {
    item.isApplied = item.isApplied ? false : true;

    if (item.category == "Price") {
      this.minPrice = this.priceOption.floor!;
      this.maxPrice = this.priceOption.ceil!;
    }

    if (item.category == "Duration") {
      this.minDuration = this.durationOption.floor!;
      this.maxDuration = this.durationOption.ceil!;
    }

    this.fetchSearchFlights();

  }

  clearFilter(categoryName: string) {
    if (categoryName == '') {
      this.filters.forEach(f => f.isApplied = false);
    } else {
      this.filters.filter(f => f.category == categoryName).forEach(f => f.isApplied = false);
    }

    this.fetchSearchFlights();
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

  totalFlyTime(totalFlyTime: number): string {
    let hour = Math.floor(totalFlyTime / 60);
    let minut = (totalFlyTime - (hour * 60));
    return `${hour}h : ${minut}m`
  }

  onCheckbox(event) {
    this.onClickCheckbox.emit(event)
  }

  verifiveLiveData():Observable<any>{
    return of(this.searchResult.isLive);
  }

  disabledFilter() {

    this.filters.forEach(f => f.disabled = false);

    let isRefundable = this.searchResult.onwardJourneys.findIndex(f => f.flights.findIndex(f1 => f1.refundable) > -1);

    if (isRefundable == -1) {
      this.filters.find(e => e.name == "Refundable")!.disabled = true;
    }

    let nonRefundable = this.searchResult.onwardJourneys.findIndex(f => f.flights.findIndex(f1 => f1.refundable == false) > -1);

    if (nonRefundable == -1) {
      this.filters.find(e => e.name == "Non-Refundable")!.disabled = true;
    }

    let stop0 = this.searchResult.onwardJourneys.findIndex(f => f.flights.length == 1);

    if (stop0 == -1) {
      this.filters.find(e => e.name == "0")!.disabled = true;
    }

    let stop1 = this.searchResult.onwardJourneys.findIndex(f => f.flights.length == 2);

    if (stop1 == -1) {
      this.filters.find(e => e.name == "1")!.disabled = true;
    }

    let stop2Plus = this.searchResult.onwardJourneys.findIndex(f => f.flights.length > 2);

    if (stop2Plus == -1) {
      this.filters.find(e => e.name == "2+")!.disabled = true;
    }

    var before6AMMoment = moment("06:00 AM", "HH:mm a");
    var date = moment("05:00 AM", "HH:mm a");
    var date1 = moment("2023-12-12 16:10:00.000", "HH:mm a");

    console.log(date1.isBefore(before6AMMoment));

    //  this.searchResult.onwardJourneys.
    // findIndex(f=> console.log(moment(f.flights[0].depDetail.time).format("dd-MM-yyyy HH:mm a")) );

    let before6AM = this.searchResult.onwardJourneys.
      findIndex(f => moment(f.flights[0].depDetail.time, "HH:mm a").isBefore(before6AMMoment) == false);

    if (before6AM == -1) {
      this.filters.find(e => e.name == "Before 6AM")!.disabled = true;
    }
  }
}


