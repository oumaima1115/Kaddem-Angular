import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEquipeFrontRoutingModule } from './list-equipe-front-routing.module';
import { ListEquipeFrontComponent } from './list-equipe-front/list-equipe-front.component';
import { ListDetailEquipeFrontComponent } from './list-detailEquipe-front/list-detail-equipe-front.component';
import { UniversiteModule } from 'src/app/universite/universite.module';


@NgModule({
  declarations: [
    ListEquipeFrontComponent,
    ListDetailEquipeFrontComponent
  ],
  imports: [
    CommonModule,
    ListEquipeFrontRoutingModule,
    UniversiteModule
  ],
  exports:[ListDetailEquipeFrontComponent]
})
export class ListEquipeFrontModule { }
