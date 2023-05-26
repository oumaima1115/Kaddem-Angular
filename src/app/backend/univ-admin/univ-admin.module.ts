import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnivAdminRoutingModule } from './univ-admin-routing.module';
import { ListeUnivAdminComponent } from './liste-univ-admin/liste-univ-admin.component';
import { CourseAdminModule } from '../course-admin/course-admin.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";

@NgModule({
  declarations: [
    ListeUnivAdminComponent,
   
  ],
  imports: [
    CommonModule,
    UnivAdminRoutingModule,
    CourseAdminModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[
    ListeUnivAdminComponent]
})
export class UnivAdminModule { }
