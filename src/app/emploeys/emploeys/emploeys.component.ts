import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/api.service';

export interface Emploeys {
    _id?: string | null;
    name?:string | null;
    phone?: string | null;
    email?: string | null;
    birthday?: string | null;
}

@Component({
  selector: 'app-emploeys',
  templateUrl: './emploeys.component.html',
  styleUrls: ['./emploeys.component.css']
})
export class EmploeysComponent {

headline = "Emploeys";
icon1 = "bi bi-arrow-through-heart-fill";




    searchText: any;

  employees: Array<Emploeys> = []
   constructor(private api: ApiService) { }

getEmploeys() {
        this.api.getEmploeys().subscribe({
            next: (data: Array<Emploeys>) => {
                this.employees = data;
            },
            error: (err) => console.log(err)
        })
    }

    ngOnInit(): void {
        this.getEmploeys();
    }

    allEmployees() {
      setTimeout (() => {
         this.getEmploeys();
      },50)
     
      
    }



}
