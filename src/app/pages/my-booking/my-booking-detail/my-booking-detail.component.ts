import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-booking-detail',
  templateUrl: './my-booking-detail.component.html',
  styleUrls: ['./my-booking-detail.component.scss']
})
export class MyBookingDetailComponent implements OnInit {
  id: any;
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log('this.id: ', this.id);
  }


}
