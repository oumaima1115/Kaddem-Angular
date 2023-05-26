import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTacheComponent } from './list-tache/list-tache.component';

const routes: Routes = [
  { path: '', component: ListTacheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacheRoutingModule { }
