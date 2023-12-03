import { Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-twowaylist',
  templateUrl: './twowaylist.component.html',
  styleUrls: ['./twowaylist.component.scss']
})
export class TwowaylistComponent implements OnInit {
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
        items: 4
      },
      499: {
        items: 4
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
  highValue: number = 12;
  option2: Options = {
    floor: 2.20,
    ceil: 12,
    minRange: 1
  };

   stop: any = [
    {id: 0, title: '0', type: 'Non-Stop',price: '₹4444'},
    {id: 1, title: '1', type: 'Stop',price: '₹4444'},
    {id: 2, title: '2+', type: 'Stop',price: '₹4444'},
  ];
  
  timingList: any = [
    {id: 1, title: 'Before 6AM', type: 'Night', img: 'assets/images/night_inactive.png', img1: 'assets/images/night_active.png'},
    {id: 2, title: '6AM-12PM', type: 'Morning', img: 'assets/images/morning_inactive.webp', img1: 'assets/images/morning_active.png'},
    {id: 3, title: '12PM-6PM', type: 'Afternoon', img: 'assets/images/noon_inactive.webp', img1: 'assets/images/noon_active.png'},
    {id: 4, title: 'After 6PM', type: 'Evening', img: 'assets/images/evening_inactive.png', img1: 'assets/images/evening_active.png'},
  ];

  timingList2: any = [
    {id: 1, title: 'Before 6AM', type: 'Night', img: 'assets/images/night_inactive.png', img1: 'assets/images/night_active.png'},
    {id: 2, title: '6AM-12PM', type: 'Morning', img: 'assets/images/morning_inactive.webp', img1: 'assets/images/morning_active.png'},
    {id: 3, title: '12PM-6PM', type: 'Afternoon', img: 'assets/images/noon_inactive.webp', img1: 'assets/images/noon_active.png'},
    {id: 4, title: 'After 6PM', type: 'Evening', img: 'assets/images/evening_inactive.png', img1: 'assets/images/evening_active.png'},
  ];

   flightList: any = [
    {id:1, isFares: true},{id:2},{id:3},{id:4},{id:5},{id:6},
  ]; 

  activeTab = 'Onward';
  
  @Input()
  activeFlight? = 0;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    let url = location.href;
    if (!url.includes('flights')) {
      let body = document.body;
      body.classList.remove("bgImage");
    }
  }

  onSelect(item, type) {
    if (type === 'Departure') {
      this.timingList.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    } else if(type === 'Arrival') {
      this.timingList2.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    }  else {
      this.stop.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    }
  }

  onSelectTab(type) {
    this.activeTab = type;
  }

  gotoNext(url) {
    this.router.navigate([url]);
  }
}
