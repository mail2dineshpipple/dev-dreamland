import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  CabinType : any = 'Economy';
  selectFrom: any;
  selectTo: any;
  Departure: any;
  Return: any;
  travellerCabin: boolean = false;
  public adultCounter: number = 0;
  public childCounter: number = 0;
  public roomCounter: number = 0;
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

  constructor(
    private router: Router,
    public commonService: CommonService,
  ) {}

  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();
    return item.Name.toLowerCase().indexOf(term) > -1 || item.Airport.toLowerCase().indexOf(term) > -1;
  }

  ngOnInit(): void {
    this.selectFrom = this.flightList[0];
    this.selectTo = this.flightList[1];
  }

  increment(data:any) {
    if (data === 'adult') {
      this.adultCounter += 1;
    } else if (data === 'child') {
      this.childCounter += 1;
    } else if (data = 'infant') {
      this.roomCounter += 1;
    }
    this.Traveller = this.adultCounter + this.childCounter + this.roomCounter;
    console.log('this.Traveller: ', this.Traveller);
  }

  decrement(data:any) {
    if (data === 'adult') {
      this.adultCounter -= 1;
    } else if (data === 'child') {
      this.childCounter -= 1;
    } else if (data === 'infant') {
      this.roomCounter -= 1;
    }
    this.Traveller = this.adultCounter + this.childCounter + this.roomCounter;
  }

  onClick() {
    this.travellerCabin = !this.travellerCabin;
  }

  onSelect(event, type) {
    console.log('event: ', event);
    if (event) {
      if (type === 'From') {
        this.selectFrom = event;
        this.isShow = false;
      } else {
        this.selectTo = event;
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

  onReverse() {
    let temp = this.selectFrom;
    this.selectFrom = this.selectTo;
    this.selectTo = temp;
  }
  gotoNext() {
  }
}
