import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/app/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatInputModule } from '@angular/material/input';

@NgModule( {
  declarations : [
    HeaderComponent,
  ],
  imports : [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    AppRoutingModule,
  ],
  exports : [
    HeaderComponent,
  ],
} )
export class HeaderModule {
}
