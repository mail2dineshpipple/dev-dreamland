import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { TransactionalReportComponent } from './transactional-report.component';

const routes: Routes = [
  {
    path: 'transactionReport',
    component: TransactionalReportComponent,
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
    TransactionalReportComponent,
  ],
  exports: [
  ]
})

export class TransactionalReportModule { }
