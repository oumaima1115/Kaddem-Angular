import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeUniversitesComponent } from './liste-universites/liste-universites.component';
import { UniversiteDetailComponent } from './universite-detail/universite-detail.component';

const routes: Routes = [
   {path:'',component:ListeUniversitesComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
