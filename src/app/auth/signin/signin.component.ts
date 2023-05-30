import { AfterViewInit, Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { LoggerService } from 'src/app/core/logger.service';

export interface User
{
  name?: string | null; email?: string | null; password?: string | null ; token?: string | null;

}


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements AfterViewInit{
    nameField: any;
 


    constructor(
        private logger: LoggerService,
        private api: ApiService,
        private router: Router
    ) { }
    

 ngAfterViewInit(): void {
        this.logger.log('ngAfterViewInit');
        // console.log('ngAfterViewInit');
        this.nameField.nativeElement.focus();
    }

  signupForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(20)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })
    

     getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }

        console.log(this.signupForm.value);

        this.api.signup(this.signupForm.value).subscribe({
            next: (data) => {
                this.router.navigate(['login']);
            },
            error: (err) => console.log(err)
        })
    }


}
