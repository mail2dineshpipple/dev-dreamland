import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-extra-baggage',
  templateUrl: './extra-baggage.component.html',
  styleUrls: ['./extra-baggage.component.scss']
})
export class ExtraBaggageComponent implements OnInit {
  public weight5Counter: number = 0;
  public weight10Counter: number = 0;
  public weight15Counter: number = 0;
  public weight45Counter: number = 0;
  public Traveller: number = 0;
  constructor(
    public dialogRef: MatDialogRef<ExtraBaggageComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }

  increment(data:any) {
    if (data === 'weight5') {
      this.weight5Counter = 1;
    } else if (data === 'weight10') {
      this.weight10Counter = 1;
    } else if (data = 'weight15') {
      this.weight15Counter = 1;
    } else if (data = 'weight45') {
      this.weight45Counter = 1;
    }
    this.Traveller = 1;
    console.log('this.Traveller: ', this.Traveller);
  }

  decrement(data:any) {
    if (data === 'weight5') {
      this.weight5Counter -= 1;
    } else if (data === 'weight10') {
      this.weight10Counter -= 1;
    } else if (data === 'weight15') {
      this.weight15Counter -= 1;
    } else if (data = 'weight45') {
      this.weight45Counter -= 1;
    }
    this.Traveller = 0;
  }
}
