import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { User } from '../signin/signin.component';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   constructor(
      
        private api: ApiService,
        private router: Router
    ) { }
    
     today = new Date();
    
    loginForm = new FormGroup({
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    onSubmit() {
        if (this.loginForm.invalid) {
            return;
        }

        // console.log(this.loginForm.value);

        this.api.login(this.loginForm.value).subscribe({
            next: (data: User) => {
                // console.log(data);
                if (data.token) this.api.setToken(data.token)
                //  this.router.navigate([this.auth.redirectUrl]);
                this.router.navigate(['customers']);
            },
            error: (err) => console.log(err)
        })
    }
  }
