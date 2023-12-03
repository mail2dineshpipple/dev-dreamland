import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { MyProfileComponent } from './my-profile.component';

const routes: Routes = [
  {
    path: 'myProfile',
    component: MyProfileComponent,
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
    MyProfileComponent,
  ],
  exports: [
  ]
})

export class MyProfileModule { }
