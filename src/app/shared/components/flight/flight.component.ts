import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  flightList: any = [
    {
      Id: 1, Name: 'New Delhi', isActive: true, 
      List: [
        {Start: 'Delhi', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
        {Start: 'Delhi', From: 'Goa', Date: 'Wed, 16 Nov', Price: '₹ 4,650'},
        {Start: 'Delhi', From: 'Bangalore', Date: 'Mon, 14 Nov', Price: '₹ 4,120'},
        {Start: 'Delhi', From: 'Amritsar', Date: 'Thu, 17 Nov', Price: '₹ 3,120'},
        {Start: 'Delhi', From: 'Hydrabad', Date: 'Sun, 16 Nov', Price: '₹ 5,425'},
        {Start: 'Delhi', From: 'Hydrabad', Date: 'Sun, 16 Nov', Price: '₹ 5,425'},
      ]
    },
    {
      Id: 2, Name: 'Mumbai', isActive: false,
      List: [
        {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
        {Start: 'Mumbai', From: 'Goa', Date: 'Wed, 16 Nov', Price: '₹ 4,650'},
        {Start: 'Mumbai', From: 'Bangalore', Date: 'Mon, 14 Nov', Price: '₹ 4,120'},
        {Start: 'Mumbai', From: 'Amritsar', Date: 'Thu, 17 Nov', Price: '₹ 3,120'},
        {Start: 'Mumbai', From: 'Hydrabad', Date: 'Sun, 16 Nov', Price: '₹ 5,425'},
        {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
      ]
    },
    {
      Id: 3, Name: 'Bangalore', isActive: false,
      List: [
        {Start: 'Bangalore', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
        {Start: 'Bangalore', From: 'Goa', Date: 'Wed, 16 Nov', Price: '₹ 4,650'},
        {Start: 'Bangalore', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 4,120'},
        {Start: 'Bangalore', From: 'Amritsar', Date: 'Thu, 17 Nov', Price: '₹ 3,120'},
        {Start: 'Bangalore', From: 'Hydrabad', Date: 'Sun, 16 Nov', Price: '₹ 5,425'},
        {Start: 'Bangalore', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
      ]
    },
    {
      Id: 4, Name: 'Hyderabad', isActive: false,
      List: [
        {Start: 'Hyderabad', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
        {Start: 'Hyderabad', From: 'Goa', Date: 'Wed, 16 Nov', Price: '₹ 4,650'},
        {Start: 'Hyderabad', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 4,120'},
        {Start: 'Hyderabad', From: 'Amritsar', Date: 'Thu, 17 Nov', Price: '₹ 3,120'},
        {Start: 'Hyderabad', From: 'Bangalore', Date: 'Sun, 16 Nov', Price: '₹ 5,425'},
        {Start: 'Hyderabad', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
      ]
  },
    {
      Id: 5, Name: 'Kolkata', isActive: false,
      List: [
        {Start: 'Kolkata', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
        {Start: 'Kolkata', From: 'Goa', Date: 'Wed, 16 Nov', Price: '₹ 4,650'},
        {Start: 'Kolkata', From: 'Bangalore', Date: 'Mon, 14 Nov', Price: '₹ 4,120'},
        {Start: 'Kolkata', From: 'Amritsar', Date: 'Thu, 17 Nov', Price: '₹ 3,120'},
        {Start: 'Kolkata', From: 'Hydrabad', Date: 'Sun, 16 Nov', Price: '₹ 5,425'},
        {Start: 'Kolkata', From: 'Mumbai', Date: 'Mon, 14 Nov', Price: '₹ 3,750'},
      ]
  },
  //   {
  //     Id: 6, Name: 'Others', isActive: false,
  //     List: [
  //       {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 2,780'},
  //       {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 4,550'},
  //       {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 3,410'},
  //       {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 5,550'},
  //       {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 7,790'},
  //       {Start: 'Mumbai', From: 'Delhi', Date: 'Mon, 14 Nov', Price: '₹ 7,790'},
  //     ]
  // },
  ];

  flightOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    items: 6,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        // nav: true
      },
      340: {
        items: 2
      },
      499: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 6
      },
    },
    nav: true
  }

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onChangeTab(item) {
    this.flightList.forEach(el => {
      if (item?.Id === el?.Id) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
      return el;
    });
  }

  gotoNext(url) {
    this.router.navigate([url]);
  }

}
