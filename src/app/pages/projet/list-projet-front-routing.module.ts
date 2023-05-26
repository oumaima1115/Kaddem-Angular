import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProjetFrontComponent } from './list-projet/list-projet-front.component';
import { TacheFrontComponent } from './list-tache/tacheFront.component';

const routes: Routes = [
  { path: '', component: ListProjetFrontComponent },
  { path: 'taches/:param', component: TacheFrontComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProjetFrontRoutingModule { }
