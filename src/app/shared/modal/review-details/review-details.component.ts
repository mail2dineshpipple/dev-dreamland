import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.scss']
})
export class ReviewDetailsComponent implements OnInit {
  category = [
      {age: 'ADULT 1', firstName: 'piyus', lastName: 'SINGH', gender: 'MALE'},
      {age: 'CHILD 1', firstName: 'aman', lastName: 'khal', gender: 'MALE'},
      {age: 'INFANT 1', firstName: 'piyus', lastName: 'SINGH', gender: 'MALE'},
      {age: 'INFANT 1', firstName: 'piyus', lastName: 'SINGH', gender: 'MALE'},
      {age: 'INFANT 1', firstName: 'piyus', lastName: 'SINGH', gender: 'MALE'},
      {age: 'INFANT 1', firstName: 'piyus', lastName: 'SINGH', gender: 'MALE'},
  ];
  constructor(
    private router: Router,
    public dialogRef: MatDialogRef<ReviewDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
  }

  gotoNext(url) {
    this.router.navigate([url]);
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

}
