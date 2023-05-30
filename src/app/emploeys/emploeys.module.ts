import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmploeysComponent } from './emploeys/emploeys.component';
import { AddEmploeysComponent } from './add-emploeys/add-emploeys.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { EmploeysSearchComponent } from './emploeys-search/emploeys-search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    EmploeysComponent,
    AddEmploeysComponent,
    EmploeysSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule
    
    

  ],
  exports:
  [AddEmploeysComponent,EmploeysSearchComponent]
})
export class EmploeysModule { }
