import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { SearchCarComponent } from './search-car.component';

@NgModule( {
  declarations : [
    SearchCarComponent,
  ],
  imports : [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports : [
    SearchCarComponent,
  ],
} )
export class SearchCarModule {
}
