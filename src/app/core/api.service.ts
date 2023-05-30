import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../auth/signin/signin.component';
import { Customer } from '../customers/customer/customer.component';
import { Emploeys } from '../emploeys/emploeys/emploeys.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {



    // private token = ''
    private TOKEN_KEY = 'token'

    setToken(value: string) {
        localStorage.setItem(this.TOKEN_KEY, value);
        // this.token = value;
    }

    getToken(): string {
        return localStorage.getItem(this.TOKEN_KEY) || '';
        // return this.token
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }


 serverUrl ='http://localhost:3000/';

   constructor(private http: HttpClient)
  { }

// Generic GET function
    GET<DynamicType>(endpoint: string): Observable<DynamicType> {
        return this.http.get<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            {
                  headers: {
                     'x-auth-token': this.getToken()
                 }
            }
        )
    }

 POST<DynamicType>(endpoint: string, data: DynamicType): Observable<DynamicType> {
        return this.http.post<DynamicType>(
            `${this.serverUrl}${endpoint}`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }
  signup(user: User): Observable<User> {
        return this.POST<User>('users/signup', user);
    }
    
  login(user: User): Observable<User> {
      return this.POST<User>('users/login', user);
    }

    //********************************************************** */

    //Customers
   getCustomers(): Observable<Array<Customer>> {
        return this.http.get<Array<Customer>>(
            `${this.serverUrl}customers`,
            {
                headers: {
                     'x-auth-token': this.getToken()
                }
            }
        )
    }

    // Read One - CRUD
    getOneCustomer(id: String): Observable<Customer> {
        return this.GET<Customer>(`customers/${id}`);
    }

    addCustomer(customer: Customer): Observable<Customer> {
      
        return this.POST<Customer>('customers', customer);
    }

 deleteCustomers(id: string): Observable<Customer> {
        return this.http.delete<Customer>(
            `${this.serverUrl}customers/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    updateCustomer(id: string, Customer: Customer): Observable<Customer> {
        return this.http.put<Customer>(
            `${this.serverUrl}customers/${id}`,
            Customer,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }


//********************************************************** */
// Emploeys
    getEmploeys(): Observable<Array<Emploeys>> {
        return this.http.get<Array<Emploeys>>(
            `${this.serverUrl}employees`,
            {
                headers: {
                     'x-auth-token': this.getToken()
                }
            }
        )
    }

    addEmploeys(employees: Emploeys): Observable<Emploeys> {
      
        return this.POST<Emploeys>('employees', employees);
    }
    

    deleteEmploeys(id: string): Observable<Emploeys> {
        return this.http.delete<Emploeys>(
            `${this.serverUrl}employees/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }


   
updateEmploeys(id: string, emploeys: Emploeys): Observable<Emploeys> {
        return this.http.put<Emploeys>(
            `${this.serverUrl}employees/${id}`,
            emploeys,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': this.getToken()
                }
            }
        )
    }

    }