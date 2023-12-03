import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unsuccessful-detail',
  templateUrl: './unsuccessful-detail.component.html',
  styleUrls: ['./unsuccessful-detail.component.scss']
})
export class UnsuccessfulDetailComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoNext(url) {
    this.router.navigate([url]);
  }
}
