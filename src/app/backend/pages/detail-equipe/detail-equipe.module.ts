import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailEquipeRoutingModule } from './detail-equipe-routing.module';
import { ListDetailEquipeComponent } from './list-detailEquipe/list-detailEquipe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListDetailEquipeComponent,
  ],
  imports: [
    CommonModule,
    DetailEquipeRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class DetailEquipeModule { }
