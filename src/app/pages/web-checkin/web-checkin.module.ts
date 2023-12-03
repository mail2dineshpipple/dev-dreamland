import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule, Routes } from '@angular/router';
import { WebCheckinComponent } from './web-checkin.component';

const routes: Routes = [
  {
    path: 'webCheckin',
    component: WebCheckinComponent,
  },
];

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      SharedModule,
      MaterialModule,
  ],
  declarations: [
    WebCheckinComponent
  ],
  exports: [

  ],
})

export class WebCheckinModule { }
