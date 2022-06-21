import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { HeaderComponent } from './header/header.component';
import { NewGardenFormComponent } from './new-garden-form/new-garden-form.component';
import { MyGardenComponent } from './my-garden/my-garden.component';

@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    HeaderComponent,
    NewGardenFormComponent,
    MyGardenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
