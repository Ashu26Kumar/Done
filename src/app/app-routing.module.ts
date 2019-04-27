import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListYourBusinessComponent } from './list-your-business/list-your-business.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DeleteComponent } from './delete/delete.component';
import { GetQuotesComponent } from './get-quotes/get-quotes.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {path: "Home", component: HomeComponent},
  {path: "Contact", component: ContactComponent},
  {path: "Forgot", component: ForgotPasswordComponent},
  {path: "", component: HomeComponent},
  {path: "AddDelete", component: ListYourBusinessComponent},
  {path: "getQuotes", component: GetQuotesComponent},
  {path: "Maintenance", component:MaintenanceComponent},
  {path: "Delete", component: DeleteComponent}
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
