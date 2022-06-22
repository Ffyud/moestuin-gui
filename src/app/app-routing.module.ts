import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGardenGridComponent } from './my-garden-grid/my-garden-grid.component';

const routes: Routes = [
  { path: 'mijn-tuin', component: MyGardenGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
