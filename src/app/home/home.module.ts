import { NgModule } from '@angular/core';

import { HomeComponent } from 'src/app/home/home.component';
import { SearchCarModule } from '../search-car/search-car.module';
import { CarCatalogByCategoryModule } from 'src/app/car-catalog-by-category/car-catalog-by-category.module';

@NgModule( {
  declarations : [
    HomeComponent,
  ],
  imports : [
    SearchCarModule,
    CarCatalogByCategoryModule,
  ],
  exports : [
    HomeComponent,
  ],
} )
export class HomeModule {
}
