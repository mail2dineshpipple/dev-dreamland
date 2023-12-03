import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HONEYMOON } from 'src/app/core/constants';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-why-dreamland',
  templateUrl: './why-dreamland.component.html',
  styleUrls: ['./why-dreamland.component.scss']
})
export class WhyDreamlandComponent implements OnInit {

  flagList = [
    {Name: 'India', Icon: 'assets/svg/in.svg'},
    {Name: 'Turkey', Icon: 'assets/svg/tr.svg'},
    {Name: 'Indonesia', Icon: 'assets/svg/id.svg '},
    {Name: 'Italy', Icon: 'assets/svg/it.svg '},
    {Name: 'United Kingdom', Icon: 'assets/svg/gb.svg'},
  ]

  tripsList: any = [
    {Id: '1', img: 'assets/images/wtf1.png', h5: 'Customers Satisfaction', p: 'Superior customer service,24x7 dedicated helpline and over 1 Lakhs delighted custome',},
    {Id: '2', img: 'assets/images/wtf2.png', h5: 'India’s Upcoming Travel Brand', p: 'Established in 2006 and growing stronger by the day.',},
    {Id: '3', img: 'assets/images/wtf3.png', h5: 'Best Price Guaranteed', p: 'Find guaranteed lowest price to worlwide destinations.',},
    {Id: '4', img: 'assets/images/wtf4.png', h5: 'Easy Booking', p: 'Search, select and save-the fastest way to book your trip.',},
    {Id: '5', img: 'assets/images/wtf5.png', h5: 'International Coverage', p: 'Search over 500 airlines & 13,00,000 flight routes in 210 countries.',}
  ];
  WhatYouGet: any = [
    {Id: '1', img: 'assets/images/celebrity.png', h5: 'Travel Like A Celebrity', p: 'Extra premium modules & other luxuries are auto-included in all our packages. Feel like a celebrity wherever you go.',},
    {Id: '2', img: 'assets/images/guidence.png', h5: 'Guidance Not Sales', p: 'Free & Fair guidance from destination specialists, whether you buy from us or not.',},
    {Id: '3', img: 'assets/images/honeymoon2.png', h5: 'Honeymoon Plus', p: 'Freebies & Goodies to Honeymooners. Spl services like candle light dinner, flower, bed arrangements, wine etc included. Honeymooners just love us.',},
    {Id: '4', img: 'assets/images/service.png', h5: 'Services & Freebies', p: 'Free Safety, Accidental insurance, Extra sightseeings &amp; activities at best rates, Trusted vendors &amp; 100% satisfaction guarantee.',},
  ]

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


  selectedFlag = 'assets/svg/in.svg';
  @Input()
  isWhyyouget? = false;

  // @Input()
  // tripYouget? = false;

  @Input()
  type?: string;

  honeymoon = HONEYMOON;

  constructor(
    public commonService: CommonService,
  ) { }
  
  ngOnInit(): void {
  }
  
  onSelect(item) {
    this.selectedFlag = item.Icon;
  }
  
}
