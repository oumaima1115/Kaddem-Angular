import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDetailEquipeFrontComponent } from './list-detailEquipe-front/list-detail-equipe-front.component';
import { ListEquipeFrontComponent } from './list-equipe-front/list-equipe-front.component';

const routes: Routes = [
  { path: '', component: ListEquipeFrontComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEquipeFrontRoutingModule { }