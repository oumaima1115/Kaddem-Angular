import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailEquipeComponent } from './list-detailEquipe/list-detailEquipe.component';

const routes: Routes = [
  { path: '', component: ListDetailEquipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailEquipeRoutingModule { }
