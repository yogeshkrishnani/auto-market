import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from 'src/app/header/header.module';
import { BuyCarComponent } from './buy-car/buy-car.component';
import { HomeModule } from 'src/app/home/home.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule( {
  declarations : [
    AppComponent,
    FooterComponent,
    BuyCarComponent,
  ],
  imports : [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HeaderModule,
    HomeModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
  ],
  bootstrap : [ AppComponent ]
} )
export class AppModule {
}
