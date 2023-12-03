import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullComponent } from './layouts/full/full.component';
import { HeaderComponent } from './header/header.component';
import { BlankComponent } from './layouts/blank/blank.component';
import { OfferComponent } from './components/offer/offer.component';
import { FlightComponent } from './components/flight/flight.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FooterComponent } from './footer/footer.component';
import { WhyDreamlandComponent } from './components/why-dreamland/why-dreamland.component';
import { InternationalTripComponent } from './components/international-trip/international-trip.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OnewaylistComponent } from './components/onewaylist/onewaylist.component';
import { TwowaylistComponent } from './components/twowaylist/twowaylist.component';
import { ExtraBaggageComponent } from './modal/extra-baggage/extra-baggage.component';
import { MoreFaresComponent } from './modal/more-fares/more-fares.component';
import { FareRulesComponent } from './modal/fare-rules/fare-rules.component';
import { ReviewDetailsComponent } from './modal/review-details/review-details.component';
import { EditProfileComponent } from './modal/edit-profile/edit-profile.component';
import { UnsuccessfulDetailComponent } from './booking/unsuccessful-detail/unsuccessful-detail.component';
import { CompletedDetailComponent } from './booking/completed-detail/completed-detail.component';
import { CancelledDetailComponent } from './booking/cancelled-detail/cancelled-detail.component';
import { UpcomingDetailComponent } from './booking/upcoming-detail/upcoming-detail.component';
import { LoginComponent } from './modal/login/login.component';
import { PasswordRecoveryComponent } from './modal/password-recovery/password-recovery.component';
import { SignupComponent } from './modal/signup/signup.component';
import { CheckinComponent } from './modal/checkin/checkin.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FAQComponent } from './components/faq/faq.component';
import { EnquiryComponent } from './modal/enquiry/enquiry.component';
import { FilterComponent } from './modal/filter/filter.component';
import {  HttpClientModule } from '@angular/common/http';
import { CustomDatePipe } from '../core/pipe/custome-date.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    CarouselModule,
    NgxSliderModule,
    HttpClientModule,
  ],
  declarations: [
    BlankComponent,
    FullComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    FlightComponent,
    HotelComponent,
    InternationalTripComponent,
    WhyDreamlandComponent,
    OnewaylistComponent,
    TwowaylistComponent,
    ExtraBaggageComponent,
    MoreFaresComponent,
    FareRulesComponent,
    ReviewDetailsComponent,
    EditProfileComponent,
    UnsuccessfulDetailComponent,
    CompletedDetailComponent,
    CancelledDetailComponent,
    UpcomingDetailComponent,
    LoginComponent,
    PasswordRecoveryComponent,
    SignupComponent,
    CheckinComponent,
    FAQComponent,
    EnquiryComponent,
    FilterComponent,
    CustomDatePipe,

  ],
  exports: [
    BlankComponent,
    FullComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    FlightComponent,
    FAQComponent,
    HotelComponent,
    InternationalTripComponent,
    WhyDreamlandComponent,
    OnewaylistComponent,
    TwowaylistComponent,
    UnsuccessfulDetailComponent,
    CompletedDetailComponent,
    CancelledDetailComponent,
    UpcomingDetailComponent,
    MatButtonToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    NgxSliderModule,
    EnquiryComponent,
    CustomDatePipe,
  ]
})

export class SharedModule { }
