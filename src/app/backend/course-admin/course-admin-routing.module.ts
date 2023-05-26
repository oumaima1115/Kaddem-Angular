import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCoursAdminComponent } from './list-cours-admin/list-cours-admin.component';

const routes: Routes = [
  {path:'courses',component:ListCoursAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseAdminRoutingModule { }
