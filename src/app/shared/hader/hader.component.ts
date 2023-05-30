import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hader',
  templateUrl: './hader.component.html',
  styleUrls: ['./hader.component.css']
})
export class HaderComponent {

@Input() headlineName = '';
@Input() icons = '';


}
