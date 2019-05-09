import { Component } from '@angular/core';
import { DataJsonService } from '../../services/data-json.service';
import { FormControl, FormGroup } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-gen-json',
  templateUrl: './gen-json.component.html',
  styleUrls: ['./gen-json.component.css']
})
export class GenJsonComponent {

  arrOk: string[];

  constructor( private _DataJson: DataJsonService ) {
    console.log(this._DataJson.formCero.status);
    if(this._DataJson.formCero.status !== 'INVALID' || this._DataJson.formCero.status === undefined){
      
    }else{
      console.log('no pe');
    }
   }

}
