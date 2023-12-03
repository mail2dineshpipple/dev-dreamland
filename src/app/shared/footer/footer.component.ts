import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CRUISE, HOLIDAYURL } from 'src/app/core/constants';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: any;
  isShowAbout = false;
  showMore = false

  footerLi: any = [
    {id: 1, footerHead: 'Our Product',
      child: [
        {id: 5, li: 'Flight Booking', route: 'flights'},
        {id: 6, li: 'Hotel Booking', route: 'hotels'},
        {id: 7, li: 'Holiday Packages', redirect: HOLIDAYURL},
        {id: 8, li: 'Cruise Packages', redirect: CRUISE},
        {id: 9, li: 'Bus Booking', queryParam: 'bus-booking'},
        {id: 10, li: 'Cab Services', queryParam: 'cab-services'},
        {id: 11, li: 'Travel Insurance', queryParam: 'travel-insurance'},
        {id: 12, li: 'Visa Services', queryParam: 'visa-services'},
        {id: 13, li: 'Corporate', queryParam: 'corporate-traveller'},
        {id: 14, li: 'MICE', queryParam: 'MICE'},
      ],
    },
    {id: 2, footerHead: 'Dreamland Insights',
      child: [
        {id: 15, li: 'About Us', queryParam: 'about-us'},
        {id: 16, li: 'Contact Us', route: 'contact'},
        {id: 17, li: 'Privacy Policy', queryParam: 'privacy-policy'},
        {id: 18, li: 'User Agreement', queryParam: 'user-aggrement'},
        {id: 19, li: 'Terms & Conditions', queryParam: 'term-condition'},
        {id: 20, li: 'Payment Security', queryParam: 'payment-security'},
        {id: 21, li: 'Fare Rule'},
        {id: 22, li: 'Travel Blog', redirect: 'https://blog.dreamlandtravel.co.in'},
        {id: 23, li: 'Testimonials', redirectNew: 'https://g.page/r/CRhASKyAwhXmEBE/review'},
        {id: 24, li: 'Online Payment', route: 'payment'},
      ],
    },
    {id: 3, footerHead: 'Popular Airline',
      child: [
        {id: 25, li: 'IndiGo Airlines'},
        {id: 26, li: 'SpiceJet Airlines'},
        {id: 27, li: 'Air India Airlines'},
        {id: 28, li: 'Air Asia Airlines'},
        {id: 29, li: 'GO FIRST Airlines'},
        {id: 30, li: 'Akasa Air'},
        {id: 31, li: 'Vistara Airlines'},
        {id: 32, li: 'Qatar airways'},
        {id: 33, li: 'United Airlines'},
        {id: 34, li: 'Emirates Airlines'},
      ],
    },
    {id: 4, footerHead: 'Popular Hotel',
      child: [
        {id: 35, li: 'Hotels near me'},
        {id: 36, li: 'Hotel in India'},
        {id: 37, li: 'Hotels in Goa'},
        {id: 38, li: 'Hotels in Manali'},
        {id: 39, li: 'Hotels in Delhi'},
        {id: 40, li: 'Hotels in Mumbai'},
        {id: 41, li: 'Hotels in Banglore'},
        {id: 42, li: 'Hotels in Hyderabad'},
        {id: 43, li: 'Hotels in Dubai'},
        {id: 44, li: 'Hotels in Thailand'},
      ],
    },
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public commonService: CommonService,
  ) { }

  ngOnInit(): void {
    if (this.router.url === '/'){
      this.isShowAbout = true;
    } else {
      this.isShowAbout = false;
    }
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)  
    ).subscribe((event: any) => {
      if (event.url === '/'){
        this.isShowAbout = true;
      } else {
        this.isShowAbout = false;
      }
    });


    let date = new Date();
    this.year = date.getFullYear();
  }

  onLinkPage(item) {
    if (item?.route) {
      this.router.navigate([item?.route]);
    } else if (item?.queryParam) {
      this.router.navigate([item?.queryParam]);
    } else if (item?.redirect) {
      this.commonService.openUrl(item?.redirect);
    } else if (item?.redirectNew) {
      window.open(item?.redirectNew, '_blank');
    }
  }
}
