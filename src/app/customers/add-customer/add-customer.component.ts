import { Component } from '@angular/core';
import { Customer } from '../customer/customer.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

 
  customerForm = new FormGroup({
        firstName: new FormControl('', {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(200)
            ]
        }),
        lastName : new FormControl('',{
          validators: [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(200)
          ]
        }),
        email: new FormControl('', {
            validators: [
                Validators.required,
                Validators.email,
                Validators.minLength(6),
                Validators.maxLength(255)
            ]
        }),
        phone: new FormControl('', {
            validators: [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(12)
            ]
        }),
        address: new FormControl('', {
            validators: 
            [
              Validators.minLength(6),
              Validators.maxLength(350)
            ]
        })
    })

 constructor(
            private api: ApiService,
            private router: Router
            ) { }

    onSubmit() {
        if (this.customerForm.invalid) {
            return;
        }

        this.api.addCustomer(this.customerForm.value).subscribe({
            next: (data: Customer) => {
                this.customerForm.reset();
                this.router.navigate(['customers'])
            },
            error: (err) => console.log(err)
        })
    }

}
