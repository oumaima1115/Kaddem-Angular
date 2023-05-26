import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipeRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class EquipeModule { }
