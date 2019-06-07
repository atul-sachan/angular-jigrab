import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { LandingComponent } from './landing/landing.component';


@NgModule({
  imports:[ 
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    
    LandingComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap:[ 
    AppComponent 
  ]
})
export class AppModule { }
