import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HotelsComponent } from './hotels.component';

const routes: Routes = [
  {
    path: 'hotels',
    component: HotelsComponent,
  },
]

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
    HotelsComponent
  ],
  exports: [
  ]
})
export class HotelsModule { }