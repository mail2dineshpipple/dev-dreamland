import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { FlightsComponent } from './flights.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { FlightPreviewComponent } from './flight-preview/flight-preview.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlightCompleteComponent } from './flight-complete/flight-complete.component';
import { FlightInvoiceComponent } from './flight-invoice/flight-invoice.component';

const routes: Routes = [
  {
    path: 'flights',
    component: FlightsComponent,
  },
  {
    path: 'flightList',
    component: FlightListComponent,
  },
  {
    path: 'flightBooking',
    component: FlightBookingComponent,
  },
  {
    path: 'flightPreview',
    component: FlightPreviewComponent,
  },
  {
    path: 'flightInvoice',
    component: FlightInvoiceComponent,
  },
  {
    path: 'flightComplete',
    component: FlightCompleteComponent,
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgSelectModule,
    MaterialModule,
    CarouselModule,
  ],
  declarations: [
    FlightsComponent,
    FlightListComponent,
    FlightBookingComponent,
    FlightPreviewComponent,
    FlightCompleteComponent,
    FlightInvoiceComponent,
  ],
  exports: [
  ]
})

export class FlightsModule { }
