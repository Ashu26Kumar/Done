import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgxLoadingModule, ngxLoadingAnimationTypes} from 'ngx-loading'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';
import { ListYourBusinessComponent } from './list-your-business/list-your-business.component';
import { FooterComponent } from './footer/footer.component';

import { BusinessServiceService } from './business-service.service';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DeleteComponent } from './delete/delete.component';

import { GetQuotesComponent } from './get-quotes/get-quotes.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    
    HomeComponent,
    ListYourBusinessComponent,
    FooterComponent,
    
    MaintenanceComponent,
    DeleteComponent,
    GetQuotesComponent,
    ContactComponent,
    ForgotPasswordComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,NgxSpinnerModule
  ],
  providers: [BusinessServiceService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
