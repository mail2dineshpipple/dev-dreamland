import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelled-detail',
  templateUrl: './cancelled-detail.component.html',
  styleUrls: ['./cancelled-detail.component.scss']
})
export class CancelledDetailComponent implements OnInit {
  content: any = [
    {id: 1, title: 'Delhi', title1: 'Hong Kong', title2: 'Singapore'},
  ];
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoNext(url) {
    this.router.navigate([url]);
  }

  onSelect(item) {
    item.isActive = !item.isActive;
  }
}
