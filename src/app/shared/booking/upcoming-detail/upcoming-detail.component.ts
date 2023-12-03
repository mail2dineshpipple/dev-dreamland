import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckinComponent } from '../../modal/checkin/checkin.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-upcoming-detail',
  templateUrl: './upcoming-detail.component.html',
  styleUrls: ['./upcoming-detail.component.scss']
})
export class UpcomingDetailComponent implements OnInit {
  showContent: any;
  showCancel: any;
  showChange: any;
  showBaggage: any;
  tabList = [
    {id: 1, title: 'I directly cancelled with the airline', isActive: false,
    text: 'Applicable only if you have cancelled the ticket directly with airline.'},
    {id: 2, title: 'My flight was cancelled by the airline', isActive: false,
    text: "Choose this option if your flight was non-operational and you didn't take an alternate flight on the same PNR."},
    {id: 3, title: 'Flight rescheduled & did not travel', isActive: false,
    text: 'Request is applicable only if the flight schedule has been major delayed, as per conditions laid down by the concerned airline. Refund is subject to airline policy. It is not applicable if the traveller(s) has taken an alternative flight directly with the airline or Dreamland.'},
  ];

  passDetail = [
    {id: 1, name: 'MUSTAQIM ALAM', type: 'Adult,Male', pnr: 'N1QF7R', number: 'N1QF7R', seat: '-', meal: '-'},
    {id: 1, name: 'MUSTAQIM ALAM', type: 'Adult,Female', pnr: 'N1QF7R', number: 'N1QF7R', seat: '-', meal: '-'},
    {id: 1, name: 'MUSTAQIM ALAM', type: 'Child,Male', pnr: 'N1QF7R', number: 'N1QF7R', seat: '-', meal: '-'},
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog
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
    } else if (item === 'cancel') {
      this.showCancel = !this.showCancel
    } else if (item === 'change') {
      this.showChange = !this.showChange
    } else if (item === 'baggage') {
      this.showBaggage = !this.showBaggage
    }
  }

  openCheckin(): void {
    const dialogRef = this.dialog.open(CheckinComponent, {
      panelClass: 'checkin-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  gotoNext(url) {
    this.router.navigate([url]);
  }
}
