import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HaderComponent } from './hader/hader.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    HaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],exports:[NavbarComponent,HaderComponent]
})
export class SharedModule { }
