import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-detail',
  templateUrl: './completed-detail.component.html',
  styleUrls: ['./completed-detail.component.scss']
})
export class CompletedDetailComponent implements OnInit {
  showContent: any;

  tabList = [
    {id: 1, title: 'I directly cancelled with the airline', isActive: false,
    text: 'Applicable only if you have cancelled the ticket directly with airline.'},
    {id: 2, title: 'My flight was cancelled by the airline', isActive: false,
    text: "Choose this option if your flight was non-operational and you didn't take an alternate flight on the same PNR."},
    {id: 3, title: 'Flight rescheduled & did not travel', isActive: false,
    text: 'Request is applicable only if the flight schedule has been major delayed, as per conditions laid down by the concerned airline. Refund is subject to airline policy. It is not applicable if the traveller(s) has taken an alternative flight directly with the airline or Dreamland.'},
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

  onOpen(item) {
    if (item === 'content') {
      this.showContent = !this.showContent
    }
  }


  gotoNext(url) {
    this.router.navigate([url]);
  }
}
