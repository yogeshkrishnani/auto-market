import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarCatalogByCategoryComponent } from './car-catalog-by-category.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CarCarouselModule } from '../car-carousel/car-carousel.module';

@NgModule( {
  declarations : [
    CarCatalogByCategoryComponent
  ],
  imports : [
    CarCarouselModule,
    CommonModule,
    MatTabsModule
  ],
  exports : [
    CarCatalogByCategoryComponent,
  ],
} )
export class CarCatalogByCategoryModule {
}
