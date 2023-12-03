import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-international-trip',
  templateUrl: './international-trip.component.html',
  styleUrls: ['./international-trip.component.scss']
})
export class InternationalTripComponent implements OnInit {

  tripsList: any = [
    { Id: 4, Name: 'Dubai', duration: '3Nights/4Days', Price: '₹19,000', img: 'assets/images/holiday/dubai.png'},
    { Id: 1, Name: 'Thailand ', duration: '4Nights/5Days', Price: '₹15,000', img: 'assets/images/holiday/thailand.png'},
    { Id: 2, Name: 'Singapore', duration: '4Nights/5Days', Price: '₹25,000', img: 'assets/images/holiday/singapore.png'},
    { Id: 3, Name: 'Bali', duration: '4Nights/5Days', Price: '₹15,000', img: 'assets/images/holiday/bali.png'},
    { Id: 5, Name: 'Mauritius', duration: '4Nights/5Days', Price: '₹21,000', img: 'assets/images/holiday/mauritius.png'},
    { Id: 6, Name: 'Maldives', duration: '3Nights/4Days', Price: '₹29,000', img: 'assets/images/holiday/maldives.png'},
    { Id: 7, Name: 'Goa', duration: '3Nights/4Days', Price: '₹7,000', img: 'assets/images/holiday/goa.png'},
    { Id: 8, Name: 'Kerala', duration: '4Nights/5Days', Price: '₹14,000', img: 'assets/images/holiday/kerala.png'},
    { Id: 9, Name: 'Andaman', duration: '4Nights/5Days', Price: '₹14,000', img: 'assets/images/holiday/andaman.png'},
  ];

  tripsOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    items: 4,
    margin: 10,
    autoplay :true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      450: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
    },
    nav: false
  }

  constructor(
    private router: Router,
    public commonService: CommonService,
  ) { }

  ngOnInit(): void {
  }

  gotoNext() {
    this.commonService.openUrl();
  }
}
