import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {
  hotelType : any = 'Upto';
  selectFrom: any;
  selectTo: any;
  CheckIn: any;
  CheckOut: any;
  roomsGuests: boolean = false;
  public roomCounter: number = 1;
  public adultCounter: number = 1;
  public childCounter: number = 0;

  cityList = [
    {Name: 'Delhi', Code: '(DEL)', Desc: '2088 properties', Country: 'IN'},
    {Name: 'Mumbai', Code: '(BOM)', Desc: '3647 properties', Country: 'IN'},
    {Name: 'Bangalore', Code: '(BLR)', Desc: '3500 properties', Country: 'IN'},
    {Name: 'Kolkata', Code:'(CCU)', Desc: '1117 properties', Country: 'IN'},
    {Name: 'Delhi', Code:'(DEL)', Desc: '2088 properties', Country: 'IN'},
    {Name: 'Bangalore', Code:'(BLR)', Desc: '3500 properties', Country: 'IN'},
    {Name: 'Mumbai', Code:'(BOM)', Desc: '3647 properties', Country: 'IN'},
    {Name: 'Kolkata', Code:'(CCU)', Desc: '1117 properties', Country: 'IN'},
  ];
  peopleLoading = false;
  isShow = false;
  selectedFilter = '1';

  constructor(
    private router: Router,
    public commonService: CommonService,
  ) {}

  customSearchFn(term: string, item: any) {
    term = term.toLowerCase();
    return item.Name.toLowerCase().indexOf(term) > -1 || item.Airport.toLowerCase().indexOf(term) > -1;
  }

  ngOnInit(): void {
    this.selectFrom = this.cityList[0];
  }

  increment(data:any) {
    if (data === 'adult') {
      this.adultCounter += 1;
    } else if (data === 'child') {
      this.childCounter += 1;
    } else if (data = 'room') {
      this.roomCounter += 1;
    }
  }

  decrement(data:any) {
    if (data === 'adult') {
      this.adultCounter -= 1;
    } else if (data === 'child') {
      this.childCounter -= 1;
    } else if (data === 'room') {
      this.roomCounter -= 1;
    }
  }

  onClick() {
    this.roomsGuests = !this.roomsGuests;
  }

  onSelect(event, type) {
    if (event) { (type === 'From') 
        this.selectFrom = event;
        this.isShow = false;
    }
  }
  ontest(type) {
    if (type === 'From') {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  gotoNext() {
    
  }
}