import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { ListeUniversitesComponent } from './liste-universites/liste-universites.component';
import { AppModule } from '../app.module';
import { HeaderComponent } from './header/header.component';
import { UniversiteDetailComponent } from './universite-detail/universite-detail.component';
import { FooterComponent } from './footer/footer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter/src/ng2-filter.module';




@NgModule({
  declarations: [
    ListeUniversitesComponent,
    HeaderComponent,
    UniversiteDetailComponent,
    FooterComponent

    
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule
    
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class UniversiteModule { }
