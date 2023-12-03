import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-checkin',
  templateUrl: './web-checkin.component.html',
  styleUrls: ['./web-checkin.component.scss']
})
export class WebCheckinComponent implements OnInit {
  panelOpenState = false;

  data = [
    {
      name:'Ethopian Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/ethiopian-logo.png'
    },
    {
      name:'Egypt Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/egyptair-logo.png'
    
    },
    {
      name:'Lufthansa Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/Lufthansa-lg.png'
    },
    {
      name:'Qatar Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/qatar-logo.png'
    },
    {
      name:'Cathay Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/cathay-logo.png'
    },
    {
      name:'British Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/british-airways-log.png'
    },
    {
      name:'Saudia Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/saudi-logo.png'
    },
    {
      name:'JETSTAR ASIA',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/jet-star-logo.png'
    },
    {
      name:'Vietnam Airline',
      date:'15 july 2023',
      img: 'https://www.easemytrip.com/images/advisory-img/vietnam-logo.png'
    },
  ];

  list = [
    {
      id:1,pic:'https://www.easemytrip.com/offer/ico-offers/air-asia.png',
      active: 1,
      child: [
        {
          label: 'Check Flight Status',
          link: 'www.airasia.com/flightstatus',
          items: [
            'Input the carrier code and flight number, e.g. I5798 Or Search by Route',
            'Click on Find Flights'
          ],
          note: 'Flight Status can be checked for flights on the previous day, same day and next day.',
        },
        {
          label: 'Web Check-in',
          link: 'www.airasia.com/check-in',
          items: [
            'Input the Departure City, PNR and Last Name as per the booking',
            'Select the passenger and add Nationality',
            'Tick to complete the Covid-19 and other self-declarations',
            'Select add ons (Seats, Baggage, etc.) and continue'
          ],
          extraP: 'The AirAsia boarding pass will be generated which is required to access the terminal building',
          note: 'Guests are required to report 3 hrs prior to departure with sufficient time to complete all the formalities. To reprint the boarding pass, guests would need to visit www.airasia.com and input the PNR details which they have already checked in.',
        },
        {
          label: 'Update Contact Details',
          link: 'www.airasia.com/member/search',
          items: [
            'Input the Departure City, PNR, Last Name & Click on Search',
            'Click on Manage Booking, Guest and Contact details',
            'Scroll and update Contact info'
          ],
          note: 'It is mandatory to provide a guest contact number and email ID in the booking.',
        },
      ],
    },
    {
      id:2,pic:'https://www.easemytrip.com/images/web-checkin/indigo-logo.png',
      active: 1,
      child: [
        {
          label: 'Check Flight Status',
          link: 'www.goindigo.in/check-flight-status',
          items: [
            'Input the Departing, Arrival and flight number, e.g. I5798 Or Search by Route',
            'Click on Search Flights'
          ],
          note: 'Flight Status can be checked for flights on the previous day, same day and next day.',
        },
        {
          label: 'Web Check-in',
          link: 'www.goindigo.in/web-check-in',
          items: [
            'Input the PNR and Email/Last Name as per the booking',
            'Select the passenger and add Nationality',
            'Tick to complete the Covid-19 and other self-declarations',
            'Select add ons (Seats, Baggage, etc.) and continue'
          ],
          note: 'Guests are required to report 3 hrs prior to departure with sufficient time to complete all the formalities. To reprint the boarding pass, guests would need to visit www.airasia.com and input the PNR details which they have already checked in.',
        },
        {
          label: 'Update Contact Details',
          link: 'www.goindigo.in/update-contact-details',
          items: [
            'Input the PNR, Email/Last Name & Click on Update Contact',
          ],
          note: ' It is mandatory to provide a guest contact number and email ID in the booking.',
        },
      ],
    },
    {
      id:3,pic:'https://www.easemytrip.com/images/web-checkin/spicejet-logo.png',
      active: 1,
      child: [
        {
          label: 'Check Flight Status',
          link: 'book.spicejet.com/FlightStatus',
          items: [
            'Input the Origin, Destination, Flight date & flight number, e.g. SG8161 Or Search by Route',
            'Click on Find Flights'
          ],
          note: 'Flight Status can be checked for flights on the previous day, same day and next day.',
        },
        {
          label: 'Web Check-in',
          link: 'book.spicejet.com/CheckIn.aspx',
          items: [
            'Input the PNR and Email/Last Name as per the booking',
            'Select the passenger and add Nationality',
            'Tick to complete the Covid-19 and other self-declarations',
            'Select add ons (Seats, Baggage, etc.) and continue'
          ],
          note: 'Guests are required to report 3 hrs prior to departure with sufficient time to complete all the formalities.',
        },
        {
          label: 'Update Contact Details',
          link: 'book.spicejet.com/RetrieveBooking.aspx?AddSeat=true',
          items: [
            'Input the PNR, Email/Last Name & Click on Retrieve Booking',
            'Click on Manage Booking, Guest and Contact details',
            'update Contact info'
          ],
          note: 'It is mandatory to provide a guest contact number and email ID in the booking.',
        },
      ],
    },
    {
      id:4,pic:'https://www.easemytrip.com/images/web-checkin/goair-logo.png',
      active: 1,
      child: [
        {
          label: 'Check Flight Status',
          link: 'www.goair.in/plan-my-trip/flight-status',
          items: [
            'Input the Origin, Destination, Flight date',
            'Click on Check Now'
          ],
          note: 'Flight Status can be checked for flights on the previous day, same day and next day.',
        },
        {
          label: 'Web Check-in',
          link: 'www.goair.in/plan-my-trip/web-check-in',
          items: [
            'Input the PNR and Email/Last Name as per the booking',
            'Select the passenger and add Nationality',
            'Tick to complete the Covid-19 and other self-declaration',
            'Select add ons (Seats, Baggage, etc.) and continue'
          ],
          note: 'Guests are required to report 3 hrs prior to departure with sufficient time to complete all the formalities.',
        },
        {
          label: 'Update Contact Details',
          link: 'www.goair.in/plan-my-trip/manage-booking',
          items: [
            'Input the PNR, Email/Last Name & Click on Retrieve Booking',
            'Click on Manage Booking, Guest and Contact details',
            'Update Contact info'
          ],
          note: 'It is mandatory to provide a guest contact number and email ID in the booking.',
        },
      ],
    },
    {
      id:5,pic:'https://www.easemytrip.com/images/web-checkin/vistara-logo.png',
      active: 1,
      child: [
        {
          label: 'Check Flight Status',
          link: 'www.airvistara.com/in/en',
          items: [
            'Click on Flight Status Tab',
            'Input the Origin, Flight No. and Date',
            'Click on Find Status'
          ],
          note: 'Flight Status can be checked for flights on the previous day, same day and next day.',
        },
        {
          label: 'Web Check-in',
          link: 'www.airvistara.com/in/en',
          items: [
            'Click on Check-in Tab',
            'Input the Booking Reference Number, Last name',
            'Click on Check-in'
          ],
          note: 'Guests are required to report 3 hrs prior to departure with sufficient time to complete all the formalities.',
        },
        {
          label: 'Update Contact Details',
          link: ' www.airvistara.com/in/en',
          items: [
            'Click on Manage My Booking Tab',
            'Input the Booking Refernece Number, Last Name',
            'Update Contact info'
          ],
          note: 'It is mandatory to provide a guest contact number and email ID in the booking.',
        },
      ],
    },
    {
      id:6,pic:'https://www.easemytrip.com/images/web-checkin/air-india.png',
      active: 1,
      child: [
        {
          label: 'Check Flight Status',
          link: '//www.airindia.com/in/en/manage/flight-status.html',
          items: [
            'Search By. Flight No/Airport/Flight Route',
            'Fill the details and Search'
          ],
          note: 'Flight Status can be checked for flights on the previous day, same day and next day.',
        },
        {
          label: 'Web Check-in',
          link: 'www.airindia.in/ssci.htm',
          items: [
            'Input the E-ticket number or Booking Reference And Last Name',
            'Click on Submit'
          ],
          note: 'Guests are required to report 3 hrs prior to departure with sufficient time to complete all the formalities.',
        },
        {
          label: 'Update Contact Details',
          link: 'bookme.airindia.in/AirIndiaB2C/Manage/Retrieve',
          items: [
            'Input the Booking Refernece Number, Last Name',
            'Click on Retrieve Booking',
            'Update Contact info'
          ],
          note: 'It is mandatory to provide a guest contact number and email ID in the booking.',
        },
      ],
    },
  ]
  selectedTab = 2;
  selectedMAT = 2;
  constructor() { }

  ngOnInit(): void {
  }
  
  gotoURL(item) {
    let url = 'https://' + item.link;
    window.open(url, "_blank")
  }

}
