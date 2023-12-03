import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/core/services/common.service';
import { ExtraBaggageComponent } from 'src/app/shared/modal/extra-baggage/extra-baggage.component';
import { FareRulesComponent } from 'src/app/shared/modal/fare-rules/fare-rules.component';
import { MoreFaresComponent } from 'src/app/shared/modal/more-fares/more-fares.component';
import { ReviewDetailsComponent } from 'src/app/shared/modal/review-details/review-details.component';


@Component({
  selector: 'app-flight-booking',
  templateUrl: './flight-booking.component.html',
  styleUrls: ['./flight-booking.component.scss']
})
export class FlightBookingComponent implements OnInit {
  customType = '1';
  selectedFareType = '1';
  panelOpenState = false;
  travellerCabin: boolean = false;
  public adultCounter: number = 0;
  public childCounter: number = 0;
  public infantCounter: number = 0;
  public Traveller: number = 0;
  public totlAmmount: number = 0;
  public idCounter: number = 0;

  insuranceOptions;
  reviewOptions;
  insurance: any = [
    {id: 1, title: '400', type: 'Trip Delay',},
    {id: 2, title: '750', type: 'Missed Flight Connection'},
    {id: 3, title: '750', type: 'Trip Cancellation',},
    {id: 4, title: '750', type: 'Flight Diversion',},
    {id: 5, title: '500', type: 'Delay of Checked-in Baggage',},
    {id: 6, title: '500', type: 'Baggage Damage',},
    {id: 7, title: '50,000', type: 'Personal Accident ',},
  ];
  // review: any = [
  //   {id: 1, title: 'I am highly satisfied with the service of the travel insurance because you have helped us a lot and resolved all the issues very smoothly.', type: '~Vishal',},
  //   {id: 2, title: 'Thank you very much and appreciate for your prompt reply and action. I received my money. I have told all my friends about Reliance Insurance.', type: '~Meera Tantry'},
  //   {id: 3, title: 'It was very good and it came at cheaper cost. With Reliance General, I was very confident that they will settle my claim in a timely fashion.', type: '~Rajiv Jain',},
  // ];

  totalSummary: any = [
    {
      id: 1, title: 'Base Fare', total: '₹ 2,266',
      list: [
        {label: 'Adult(s) (1 X ₹ 2,266)', amount: '₹ 2,266'},
      ]
    },
    {
      id: 2, title: 'Fee & Surcharges', total: '₹ 887',
      list: [
        {label: 'Total fee & surcharges:', amount: '₹ 882', isBold: true},
        {label: 'Convenience Fee', amount: '₹ 5'}
      ]
    },
    {
      id: 3, title: 'Other Services', total: '₹ 100',
      list: [
        {label: 'Meals', amount: '₹ 100'},
      ]
    },
    {
      id: 4, title: 'Commission Via Deal Code', total: '- ₹ 58',isMinus: true,
      list: [
        {label: 'MYSUPERDF', amount: '- ₹ 58', isMinus: true},
      ]
    },
    {
      id: 5, title: 'Commission Via Promo Cash', total: '- ₹ 25', isMinus: true,
      list: [
        {label: 'Commission Via Promo Cash', amount: '- ₹ 25', isMinus: true},
      ]
    },
    {
      id: 6, title: 'TDS', total: '₹ 5',
      list: [
        {label: 'TDS', amount: '₹ 5'},
      ]
    },
  ];

  smDeatails: any = [
    {id: 1, title: 'Seats', img: 'assets/images/seats.png', isActive: true},
    {id: 2, title: 'Meals', img: 'assets/images/meals.png', isActive: false,
      list:  [
        {id: 1, title: 'TGL Co. Kadak Masala Chai Premix', amt: '100', img: 'assets/images/teaIcon.png'},
        {id: 2, title: 'TGL Co. Premix coffee', amt: '100', img: 'assets/images/samosa.png'},
        {id: 3, title: 'Bhel - Garlic', amt: '150', img: 'assets/images/bhel.png'},
        {id: 4, title: 'Bhel - Phudina (Jain)', amt: '150', img: 'assets/images/slard.png'},
        {id: 5, title: 'Non Veg Biryani', amt: '200', img: 'assets/images/teaIcon.png'},
        {id: 6, title: 'Happilo Almond Tin Salted 50 gm', amt: '200', img: 'assets/images/cola.png'},
        {id: 7, title: 'Happilo Cashew Tin Salted 50 gm', amt: '200', img: 'assets/images/toast.png'},
      ]
    },
  ];

  flightType = [
    'Complimentary meals', 'Free seats available', 'Starting at ₹ 3,350', 'Starting at ₹ 3,600', 'Ticket will be issued instantly', 'Cabin baggage 7 Kgs, Check-in baggage included'
  ];

  gstField = new FormControl(false);
  responsiveFooter = "Continue";
  isFlightSeatMeal = false;
  
  constructor(
    private router: Router,
    public dialog: MatDialog,
    public commonService: CommonService,
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.reviewOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
        items: 2,
        margin: 5,
        responsive: {
          // 0: {
          //   items: 1
          // },
          // 340: {
          //   items: 2
          // },
          // 499: {
          //   items: 2
          // },
          // 768: {
          //   items: 2
          // },
          // 992: {
          //   items: 2
          // },
        },
        nav: true
      };

      this.insuranceOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
        items: 3,
        margin: 5,
        responsive: {
          0: {
            items: 1
          },
          340: {
            items: 2
          },
          // 499: {
          //   items: 3
          // },
          // 768: {
          //   items: 3
          // },
          992: {
            items: 3
          },
        },
        nav: true
      };
    }, 300);
  }

  // increment(data:any) {
  //   if (data === 'adult') {
  //     this.adultCounter += 1;
  //   } else if (data === 'child') {
  //     this.childCounter += 1;
  //   } else if (data = 'infant') {
  //     this.infantCounter += 1;
  //   }
  //   this.Traveller = this.adultCounter + this.childCounter + this.infantCounter;
  //   console.log('this.Traveller: ', this.Traveller);
  // }

  // decrement(data:any) {
  //   if (data === 'adult') {
  //     this.adultCounter -= 1;
  //   } else if (data === 'child') {
  //     this.childCounter -= 1;
  //   } else if (data === 'infant') {
  //     this.infantCounter -= 1;
  //   }
  //   this.Traveller = this.adultCounter + this.childCounter + this.infantCounter;
  // }

  increments(data:any) {
    if (data === 'id') {
      this.idCounter = 1;
    } 
    this.Traveller = 1;
    console.log('this.Traveller: ', this.Traveller);
  }
  decrements(data:any) {
    if (data === 'id') {
      this.idCounter -= 1;
    } 
    this.Traveller = 0;
  }
  // decrement(data:any) {
  //   if (data === 'weight5') {
  //     this.weight5Counter -= 1;
  //   } else if (data === 'weight10') {
  //     this.weight10Counter -= 1;
  //   } else if (data === 'weight15') {
  //     this.weight15Counter -= 1;
  //   } else if (data = 'weight45') {
  //     this.weight45Counter -= 1;
  //   }
  //   this.Traveller = 0;
  // }
  openExtraBaggage(): void {
    this.travellerCabin = !this.travellerCabin;
    const dialogRef = this.dialog.open(ExtraBaggageComponent, {
      panelClass: 'extra-baggage-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openFareRules(): void {
    const dialogRef = this.dialog.open(FareRulesComponent, {
      panelClass: 'fare-rules-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openMoreFares(): void {
    const dialogRef = this.dialog.open(MoreFaresComponent, {
      panelClass: 'more-fares-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openreviewDetails(): void {
    const dialogRef = this.dialog.open(ReviewDetailsComponent, {
      panelClass: 'review-Details-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onSelect(item) {
    item.isActive = !item.isActive;
  }

  onChangeTab(item) {
    this.smDeatails.forEach(el => {
      if (item?.id === el?.id) {
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

  onClickBtn(key) {
    if(key === "Continue") {
      this.responsiveFooter = "Proceed";
    } else {
      this.openreviewDetails();
    }
  }

  openInnerPage(param) {

  }
}