import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGardenComponent } from './my-garden/my-garden.component';

const routes: Routes = [
  { path: 'mijn-tuin', component: MyGardenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
