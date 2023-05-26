import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';
import { ListeCousComponent } from './liste-cous/liste-cous.component';


const routes: Routes = [
  {path:'',component:ListeCousComponent},
  {path:'details',component:DetailCoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursRoutingModule { }
