import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotelList: any = [   
    {
      Id: 1, Name: 'Delhi', isActive: true,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'Hotel Gold Regency', Star: [1,2,3], Location: 'Paharganj', Offer: '21%', Price: '₹2209' },
        {img: 'assets/images/hotel2.png', Name: 'Hotel Southern', Star: [1,2,3], Location: 'New Delhi Karol Bagh', Offer: '10%', Price: '₹2158' },
        {img: 'assets/images/hotel3.png', Name: 'De Pavilion Hotel', Star: [1,2,3,4], Location: 'Delhi Mahipalpur', Offer: '17%', Price: '₹2393' },
        {img: 'assets/images/hotel4.png', Name: 'Foxoso Delhi Airport - T3', Star: [1,2,3,4], Location: 'Delhi', Offer: '13%', Price: '₹3936' },
        {img: 'assets/images/hotel1.png', Name: 'Country Inn & Suites by Radisson, Sahibabad', Star: [1,2,3,4,5], Location: 'Distt Ghaziabad (U.P.) Sahibabad', Offer: '8%', Price: '₹4291' },
      ]
    },
    {
      Id: 2, Name: 'Goa', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'International Centre Goa (ICG)', Star: [1,2,3], Location: 'Dona Paula Panjim', Offer: '34%', Price: '₹2294' },
        {img: 'assets/images/hotel2.png', Name: 'Alidia Beach Cottages', Star: [1,2,3], Location: 'Baga', Offer: '26%', Price: '₹2487' },
        {img: 'assets/images/hotel3.png', Name: 'Resort De Alturas Candolim', Star: [1,2,3,4], Location: 'Candolim', Offer: '38%', Price: '₹4292' },
        {img: 'assets/images/hotel4.png', Name: 'Ziva Suites', Star: [1,2,3,4], Location: 'Anjuna', Offer: '18%', Price: '₹4846' },
        {img: 'assets/images/hotel1.png', Name: 'Country Inn & Suites by Radisson', Star: [1,2,3,4,5], Location: 'Goa Candolim Calangute', Offer: '18%', Price: '9094' },
      ]
    },
    {
      Id: 3, Name: 'Manali', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'Foxoso Coral Resort and Spa', Star: [1,2,3,4,5], Location: 'Kullu', Offer: '30%', Price: '₹3722' },
        {img: 'assets/images/hotel2.png', Name: "Hotel D'Chalet Manali", Star: [1,2,3], Location: 'Old Manali', Offer: '20%', Price: '₹960' },
        {img: 'assets/images/hotel3.png', Name: 'New Harmony Inn', Star: [1,2,3], Location: 'Rangri', Offer: '14%', Price: '₹807' },
        {img: 'assets/images/hotel4.png', Name: 'Snow Bloom Resort', Star: [1,2,3,4], Location: 'Shuru', Offer: '18%', Price: '₹1440' },
        {img: 'assets/images/hotel1.png', Name: 'Shingar Regency', Star: [1,2,3,4], Location: 'Hadimba Temple Rd', Offer: '10%', Price: '₹1850' },
      ]
    },
    {
      Id: 4, Name: 'Mumbai', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'Hotel Parle International', Star: [1,2,3], Location: 'Near Mumbai Airport', Offer: '31%', Price: '₹4514' }
      ]
    },
    {
      Id: 5, Name: 'Banglore', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'The Bouvice Hotel', Star: [1,2,3], Location: 'Koramangala', Offer: '18%', Price: '₹2071' },
        {img: 'assets/images/hotel2.png', Name: 'YN Hotels', Star: [1,2,3], Location: 'K R Puram', Offer: '13%', Price: '₹2002' },
        {img: 'assets/images/hotel3.png', Name: 'Lemon Tree Hotel, Electronics City, Bangalore', Star: [1,2,3,4], Location: 'Electronic City', Offer: '19%', Price: '₹3334' },
        {img: 'assets/images/hotel4.png', Name: 'Goldfinch Hotel Bengaluru', Star: [1,2,3,4], Location: 'Gandhi Nagar', Offer: '7%', Price: '₹3664' },
        {img: 'assets/images/hotel1.png', Name: 'The Chancery Pavilion', Star: [1,2,3,4,5], Location: 'Ashok Nagar', Offer: '10%', Price: '₹4742' },
      ]
    },
    {
      Id: 6, Name: 'Hyderabad', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'The Central Court Hotel', Star: [1,2,3], Location: 'Lakdikapul', Offer: '23%', Price: '₹2082' },
        {img: 'assets/images/hotel2.png', Name: 'Hotel Imperial Classic Near Snow World', Star: [1,2,3], Location: 'Himayat Nagar', Offer: '27%', Price: '₹1095' },
        {img: 'assets/images/hotel3.png', Name: 'Aalankrita Resort And Convention', Star: [1,2,3,4], Location: 'Secunderabad', Offer: '34%', Price: '₹4463' },
        {img: 'assets/images/hotel4.png', Name: 'emon Tree Hotel, Gachibowli, Hyderabad', Star: [1,2,3,4], Location: 'Gachibowli', Offer: '15%', Price: '₹4141' },
        {img: 'assets/images/hotel1.png', Name: 'THE PARK HYDERABAD', Star: [1,2,3,4,5], Location: 'Somajiguda', Offer: '10%', Price: '₹4904' },
      ]
    },
    {
      Id: 7, Name: 'Dubai', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'Sun & Sands Sea View Hotel', Star: [1,2,3], Location: 'Deira, Dubai', Offer: '10%', Price: '₹4240' },
        {img: 'assets/images/hotel2.png', Name: 'Premier Inn Dubai Silicon Oasis Hotel', Star: [1,2,3], Location: 'Dubai Silicon Oasis', Offer: '10%', Price: '₹4599' },
        {img: 'assets/images/hotel3.png', Name: 'SKAF HOTELS', Star: [1,2,3,4], Location: 'Al Jaddaf, Dubai', Offer: '10%', Price: '₹5362' },
        {img: 'assets/images/hotel4.png', Name: 'The Manor by JA', Star: [1,2,3,4,5], Location: 'Jebel Ali, Dubai', Offer: '24%', Price: '₹5578' },
        {img: 'assets/images/hotel1.png', Name: 'Millennium Plaza Downtown Hotel', Star: [1,2,3,4,5], Location: 'Sheikh Zayed Road, Dubai', Offer: '32%', Price: '₹8906' },
      ]
    },
    {
      Id: 8, Name: 'Thailand', isActive: false,
      List: [
        {img: 'assets/images/hotel1.png', Name: 'Days Inn by Wyndham Aonang Krabi', Star: [1,2,3], Location: 'Karabi', Offer: '32%', Price: '₹1402' },
        {img: 'assets/images/hotel2.png', Name: 'Le Fenix Sukhumvit Hotel', Star: [1,2,3], Location: 'Bangkok', Offer: '33%', Price: '₹1493' },
        {img: 'assets/images/hotel3.png', Name: 'Nova Platinum Hotel', Star: [1,2,3,4], Location: 'South Pattaya', Offer: '14%', Price: '₹1794' },
        {img: 'assets/images/hotel4.png', Name: 'Four Seasons Place', Star: [1,2,3,4], Location: 'Central Pattaya', Offer: '25%', Price: '₹2314' },
        {img: 'assets/images/hotel1.png', Name: 'Citrus Grande Hotel Pattaya By Compass Hospitality', Star: [1,2,3,4,5], Location: 'South Pattaya, Pattaya', Offer: '10%', Price: '₹2149' },
        {img: 'assets/images/hotel2.png', Name: 'Grand Mercure Bangkok Atrium', Star: [1,2,3,4,5], Location: 'Sukhumvit, Bangkok', Offer: '11%', Price: '₹4205' },
      ]
    },
  ];

  hotelOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    items: 4,
    margin: 10,
    autoplay: true,
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
  ) { }

  ngOnInit(): void {
  }

  onChangeTab(item) {
    this.hotelList.forEach(el => {
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
