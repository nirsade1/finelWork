import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { LoginComponent } from './auth/login/login.component';
import { CustomerComponent } from './customers/customer/customer.component';
import { EmploeysComponent } from './emploeys/emploeys/emploeys.component';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { CustomersDetailsComponent } from './customers/customers-details/customers-details.component';

const routes: Routes = [
  { path: 'signup', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'employees', component: EmploeysComponent },
  { path: 'edit-customer/:id', component:EditCustomerComponent },
  { path: 'customers-details/:id', component: CustomersDetailsComponent },

  { path: '', pathMatch: 'full', redirectTo: '/signup' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
