import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUnivAdminComponent } from './liste-univ-admin/liste-univ-admin.component';

const routes: Routes = [
  {path:'univ',component:ListeUnivAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnivAdminRoutingModule { }
