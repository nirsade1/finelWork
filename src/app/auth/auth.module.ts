import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { FieldErrorComponent } from './field-error/field-error.component';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    FieldErrorComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class AuthModule { }
