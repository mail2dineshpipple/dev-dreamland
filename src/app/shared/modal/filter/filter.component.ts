import { Options } from '@angular-slider/ngx-slider';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  minValue: number = 17000;
  maxValue: number = 48000;
  option1: Options = {
    floor: 17000,
    ceil: 48000,
    minRange: 100
  };

  lowValue: number = 2.20;
  highValue: number = 12.30;
  option2: Options = {
    floor: 2.20,
    ceil: 12.30,
    minRange: 1
  };
  stop: any = [
    {id: 0, title: '0', type: 'Non-Stop',price: '₹4444'},
    {id: 1, title: '1', type: 'Stop',price: '₹4444'},
    {id: 2, title: '2+', type: 'Stop',price: '₹4444'},
  ];
  timingList: any = [
    {id: 1, title: 'Before 6AM', type: '₹4321', img: 'assets/images/night_inactive.png', img1: 'assets/images/night_active.png'},
    {id: 2, title: '6AM-12PM', type: '₹4321', img: 'assets/images/morning_inactive.webp', img1: 'assets/images/morning_active.png'},
    {id: 3, title: '12PM-6PM', type: '₹4321', img: 'assets/images/noon_inactive.webp', img1: 'assets/images/noon_active.png'},
    {id: 4, title: 'After 6PM', type: '₹4321', img: 'assets/images/evening_inactive.png', img1: 'assets/images/evening_active.png'},
  ];

  timingList2: any = [
    {id: 1, title: 'Before 6AM', type: '₹4321', img: 'assets/images/night_inactive.png', img1: 'assets/images/night_active.png'},
    {id: 2, title: '6AM-12PM', type: '₹4321', img: 'assets/images/morning_inactive.webp', img1: 'assets/images/morning_active.png'},
    {id: 3, title: '12PM-6PM', type: '₹4321', img: 'assets/images/noon_inactive.webp', img1: 'assets/images/noon_active.png'},
    {id: 4, title: 'After 6PM', type: '₹4321', img: 'assets/images/evening_inactive.png', img1: 'assets/images/evening_active.png'},
  ];

  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
  }
  
  onSelect(item, type) {
    if (type === 'Departure') {
      this.timingList.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    } else if(type === 'Arrival') {
      this.timingList2.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    }  else {
      this.stop.forEach(el => {
        if (el?.id === item?.id) {
          el.active = !el.active;
        }
      });
    }
  }
  close(): void {
    this.dialogRef.close();
  }
}
