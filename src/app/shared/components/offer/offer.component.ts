import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  offerOptions: OwlOptions = {};
  
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.offerOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
        items: 4,
        margin: 10,
        responsive: {
          0: {
            items: 1
          },
          450: {
            items: 2
          },
          576: {
            items: 3
          },
          768: {
            items: 4
          },
        },
        nav: false
      }
    }, 300);
  }


  gotoNext(url) {
    this.router.navigate([url]);
  }
}
