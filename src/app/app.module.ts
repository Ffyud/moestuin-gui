import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GardenComponent } from './garden/garden.component';
import { HeaderComponent } from './header/header.component';
import { NewGardenFormComponent } from './new-garden-form/new-garden-form.component';
import { MyGardenGridComponent } from './my-garden-grid/my-garden-grid.component';
import { NewGardenContentFormComponent } from './new-garden-content-form/new-garden-content-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GardenComponent,
    HeaderComponent,
    NewGardenFormComponent,
    MyGardenGridComponent,
    NewGardenContentFormComponent
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
