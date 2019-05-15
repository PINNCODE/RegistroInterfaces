import { Component } from '@angular/core';
import { DataJsonService } from './services/data-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public _DataJson: DataJsonService){
    
  }

}
