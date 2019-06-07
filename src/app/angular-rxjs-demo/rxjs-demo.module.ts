import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule, 
  MatNativeDateModule, 
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatToolbarModule } from '@angular/material';

import { RxjsDemoRoutingModule } from './rxjs-demo.routing';
import { RxjsDemoComponent } from './rxjs-demo.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { ConcatComponent } from './concat/concat.component';
import { ConcatAllComponent } from './concat-all/concat-all.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,

    RxjsDemoRoutingModule
  ],
  providers: [],
  declarations: [
    RxjsDemoComponent,
    CombineAllComponent,
    CombineLatestComponent,
    ConcatComponent,
    ConcatAllComponent
  ]
})
export class RxjsDemoModule { }