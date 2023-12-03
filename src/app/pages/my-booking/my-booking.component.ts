import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.scss']
})
export class MyBookingComponent implements OnInit {

  tabList = [
    {id: 1, name: 'Upcoming', isActive: true, isTabImg0: true},
    {id: 2, name: 'Cancelled', isActive: false, isTabImg1: true},
    {id: 3, name: 'Completed', isActive: false, isTabImg2: true},
    {id: 4, name: 'Unsuccessful', label: '2 Unsuccessful Booking', isActive: false, isTabImg3: true},
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onChangeTab(item) {
    this.tabList.forEach(el => {
      if (item?.id === el?.id) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
      return el;
    });
  }

  gotoDetail(data) {
    this.router.navigate([`myBooking/${data}`]);
  }
  
  gotoNext(url) {
    this.router.navigate([url]);
  }
}
