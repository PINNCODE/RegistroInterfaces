import { Component } from '@angular/core';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-gen-json',
  templateUrl: './gen-json.component.html',
  styleUrls: ['./gen-json.component.css']
})
export class GenJsonComponent {

  arrOk: string[];

  constructor( public _DataJson: DataJsonService ) {
    if(this._DataJson.formCero.status !== 'INVALID' || this._DataJson.formCero.status === undefined){
      
    }else{
      console.log('no pe');
    }
   }

}
