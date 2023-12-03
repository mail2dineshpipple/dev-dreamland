import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { MyBookingComponent } from './my-booking.component';
import { MyBookingDetailComponent } from './my-booking-detail/my-booking-detail.component';

const routes: Routes = [
  {
    path: 'myBooking',
    component: MyBookingComponent,
  },
  {
    path: 'myBooking/:id',
    component: MyBookingDetailComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
  ],
  declarations: [
    MyBookingComponent,
    MyBookingDetailComponent,
  ],
  exports: [
  ]
})

export class MyBookingModule { }
