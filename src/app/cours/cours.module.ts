import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursRoutingModule } from './cours-routing.module';
import { ListeCousComponent } from './liste-cous/liste-cous.component';
import { UniversiteModule } from '../universite/universite.module';
import { DetailCoursComponent } from './detail-cours/detail-cours.component';


@NgModule({
  declarations: [
    ListeCousComponent,
    DetailCoursComponent
  ],
  imports: [
    CommonModule,
    CoursRoutingModule,
    UniversiteModule
  ]
})
export class CoursModule { }
