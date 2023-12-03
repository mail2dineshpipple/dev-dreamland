import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PasswordRecoveryComponent } from '../password-recovery/password-recovery.component';
import { SignupComponent } from '../signup/signup.component';
import { USER } from 'src/app/core/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentuser: any;
  constructor( 
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  PasswordRecovery(): void {    
    const dialogRef = this.dialog.open(PasswordRecoveryComponent, {
      panelClass: 'passwordRecovery-modal',
    });
  }

  Signup(): void {    
    const dialogRef = this.dialog.open(SignupComponent, {
      panelClass: 'signup-modal',
    });
  }
  
  close(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    localStorage.setItem(USER, JSON.stringify(true));
    this.dialogRef.close(true);
  }
}
