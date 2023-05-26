import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TacheRoutingModule } from './tache-routing.module';
import { ListTacheComponent } from './list-tache/list-tache.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ListTacheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TacheRoutingModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]

})
export class TacheModule { }
