import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarCarouselComponent } from './car-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule( {
  declarations : [
    CarCarouselComponent
  ],
  exports : [
    CarCarouselComponent
  ],
  imports : [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule
  ]
} )
export class CarCarouselModule {
}
