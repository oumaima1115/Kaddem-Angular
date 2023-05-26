import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './universite/footer/footer.component';
import { DashboardComponent } from './backend/pages/dashboard/dashboard.component';
import { NavbarComponent } from './backend/shared/navbar/navbar.component';
import { SidebarComponent } from './backend/shared/sidebar/sidebar.component';
import { FooterBackComponent } from './backend/shared/footer-back/footer-back.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    FooterBackComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
