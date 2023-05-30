import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersDetailsComponent } from './customers-details/customers-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerComponent,
    AddCustomerComponent,
    CustomersDetailsComponent,
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports:[AddCustomerComponent,CustomersDetailsComponent,EditCustomerComponent,CustomerComponent]
})
export class CustomersModule { }
