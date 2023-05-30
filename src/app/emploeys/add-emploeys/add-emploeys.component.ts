import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { Emploeys } from '../emploeys/emploeys.component';

@Component({
  selector: 'app-add-emploeys',
  templateUrl: './add-emploeys.component.html',
  styleUrls: ['./add-emploeys.component.css']
})
export class AddEmploeysComponent {

emploeysForm = new FormGroup({
        name: new FormControl('', {
            validators: [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(200)
            ]
        }),
        
        phone: new FormControl('', {
            validators: [
            Validators.required,
            Validators.minLength(9),
            Validators.maxLength(12)
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
        
})

constructor(
            private api: ApiService,
            private router: Router
            ) { }


@Output() buttonClicked = new EventEmitter();
     onButtonClick() {
     this.buttonClicked.emit();
    }

    onSubmit() {
        if (this.emploeysForm.invalid) {
            return;
        }

        this.api.addEmploeys(this.emploeysForm.value).subscribe({
            next: (data: Emploeys) => {
                this.emploeysForm.reset();
                this.router.navigate(['employees'])
            },
            error: (err) => console.log(err)
        })
    }


}
