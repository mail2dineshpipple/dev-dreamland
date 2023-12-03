import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-more-fares',
  templateUrl: './more-fares.component.html',
  styleUrls: ['./more-fares.component.scss']
})
export class MoreFaresComponent implements OnInit {
  selectedType = '1';
  step = 0;
  panelOpenState = true;
  constructor(
    public dialogRef: MatDialogRef<MoreFaresComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
