import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HolidaysComponent } from './holidays.component';

const routes: Routes = [
  {
    path: 'holidays',
    component: HolidaysComponent,
  },
]

@NgModule({
  declarations: [
    HolidaysComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgSelectModule,
    MaterialModule,
    CarouselModule,
  ]
})
export class HolidaysModule { }
