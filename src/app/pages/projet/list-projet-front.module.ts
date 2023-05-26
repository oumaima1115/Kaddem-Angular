import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProjetFrontRoutingModule } from './list-projet-front-routing.module';
import { ListProjetFrontComponent } from './list-projet/list-projet-front.component';
import { UniversiteModule } from 'src/app/universite/universite.module';
import { TacheFrontComponent } from './list-tache/tacheFront.component';


@NgModule({
  declarations: [
    ListProjetFrontComponent,
    TacheFrontComponent
  ],
  imports: [
    CommonModule,
    ListProjetFrontRoutingModule,
    UniversiteModule
  ],
  exports:[TacheFrontComponent]
})
export class ListProjetFrontModule { }
