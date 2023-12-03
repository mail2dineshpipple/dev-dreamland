import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FareRulesComponent } from 'src/app/shared/modal/fare-rules/fare-rules.component';

@Component({
  selector: 'app-flight-complete',
  templateUrl: './flight-complete.component.html',
  styleUrls: ['./flight-complete.component.scss']
})
export class FlightCompleteComponent implements OnInit {
  showContent: any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  openFareRules(): void {
    const dialogRef = this.dialog.open(FareRulesComponent, {
      panelClass: 'fare-rules-modal',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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
