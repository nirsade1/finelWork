import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

export interface Customer {
    _id?: string | null;
    firstName?:string | null;
    lastName?: string | null;
    email?:    string | null;
    phone?:    string | null;
    address?:  string | null;

}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

headline = "Customers";
icon1 = "bi bi-person-fill";
  
  
  customers: Array<Customer> = []

  constructor(private api: ApiService) { }

getCustomers() {
        this.api.getCustomers().subscribe({
            next: (data: Array<Customer>) => {
                this.customers = data;
            },
            error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getCustomers();
    }

    onDelete(customers: Customer) {
        if (!customers._id) {
            return;
        }

        this.api.deleteCustomers(customers._id).subscribe({
            next: (data: Customer) => {
                this.getCustomers();
            },
            error: (err) => console.log(err)
        })
    }

    onComplete(employees: Customer) {
        if (!employees._id) {
            return;
        }

        this.api.updateCustomer(
            employees._id,
            {}
        ).subscribe({
            next: (data: Customer) => {
                this.getCustomers();
            },
            error: (err) => console.log(err)
        })
    }

}
