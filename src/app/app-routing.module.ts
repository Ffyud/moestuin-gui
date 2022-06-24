import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GardenComponent } from './garden/garden.component';
import { MyGardenGridComponent } from './my-garden-grid/my-garden-grid.component';

const routes: Routes = [
  { path: '', component: GardenComponent},
  { path: 'mijn-tuin', component: MyGardenGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
