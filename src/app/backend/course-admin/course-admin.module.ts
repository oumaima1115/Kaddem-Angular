import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseAdminRoutingModule } from './course-admin-routing.module';
import { ListCoursAdminComponent } from './list-cours-admin/list-cours-admin.component';
import { UnivAdminModule } from '../univ-admin/univ-admin.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListCoursAdminComponent
  ],
  imports: [
    CommonModule,
    CourseAdminRoutingModule,
    FormsModule
  ],
    exports:[ListCoursAdminComponent]

})
export class CourseAdminModule { }
