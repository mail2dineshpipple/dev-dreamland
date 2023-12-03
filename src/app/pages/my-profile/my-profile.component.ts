import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileComponent } from 'src/app/shared/modal/edit-profile/edit-profile.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
     panelClass:"company-profileModal"
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    })
  }
}
