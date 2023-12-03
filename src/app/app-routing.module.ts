import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './shared/layouts/blank/blank.component';
import { FullComponent } from './shared/layouts/full/full.component';
// import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        // component: HomeComponent,
        loadChildren: () => import('./pages/pages.module').then(x => x.PagesModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/flights/flights.module').then(x => x.FlightsModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/hotels/hotels.module').then(x => x.HotelsModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/holidays/holidays.module').then(x => x.HolidaysModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/my-booking/my-booking.module').then(x => x.MyBookingModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/my-profile/my-profile.module').then(x => x.MyProfileModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/my-wallet/my-wallet.module').then(x => x.MyWalletModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/transactional-report/transactional-report.module').then(x => x.TransactionalReportModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/payment/payment.module').then(x => x.PaymentModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/contact-us/contact-us.module').then(x => x.ContactUsModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/web-checkin/web-checkin.module').then(x => x.WebCheckinModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/offer-details/offer-details.module').then(x => x.OfferDetailsModule),
      },
      {
        path: '',
        loadChildren: () => import('./pages/inner-page/inner-page.module').then(x => x.InnerPageModule),
      },
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
