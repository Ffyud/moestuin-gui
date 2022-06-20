import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { HeaderComponent } from './header/header.component';
import { BottomModalComponent } from './bottom-modal/bottom-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    HeaderComponent,
    BottomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
