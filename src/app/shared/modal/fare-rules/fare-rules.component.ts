import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-fare-rules',
  templateUrl: './fare-rules.component.html',
  styleUrls: ['./fare-rules.component.scss']
})
export class FareRulesComponent implements OnInit {
  step = 0;
  panelOpenState = false;
  panelOpenState1 = false;

  setStep(index: number) {
    this.step = index;
  }

  constructor(
    public dialogRef: MatDialogRef<FareRulesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
