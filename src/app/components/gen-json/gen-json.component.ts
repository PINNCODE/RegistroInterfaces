import { Component } from '@angular/core';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-gen-json',
  templateUrl: './gen-json.component.html',
  styleUrls: ['./gen-json.component.css']
})
export class GenJsonComponent {

  formCeroVal = false;
  formUnoVal = false;
  formDosVal = false;
  formTresVal = false;
  formCuatroVal = false;
  formCincoVal = false;
  formSeisVal = false;
  formSieteVal = false;
  formOchoVal = false;
  nombre = "carnet"

  constructor( public _DataJson: DataJsonService ) {
    

    if(this._DataJson.formCero !== undefined){
      if (this._DataJson.formCero.status !== 'INVALID') {
        this.formCeroVal = true;
        this.nombre = this._DataJson.formCero.controls['claveComponente'].value;
      }
    }

    if(this._DataJson.formUno !== undefined){
      if (this._DataJson.formUno.status !== 'INVALID') {
        this.formUnoVal = true;
      }
    }

    if(this._DataJson.formDos !== undefined){
      if (this._DataJson.formDos.status !== 'INVALID') {
        this.formDosVal = true;
      }
    }

    if(this._DataJson.formTres !== undefined){
      if (this._DataJson.formTres.status !== 'INVALID') {
        this.formTresVal = true;
      }
    }

    if(this._DataJson.formCuatro !== undefined){
      if (this._DataJson.formCuatro.status !== 'INVALID') {
        this.formCuatroVal = true;
      }
    }

    if(this._DataJson.formCinco !== undefined){
      if (this._DataJson.formCinco.status !== 'INVALID') {
        this.formCincoVal = true;
      }
    }

    if(this._DataJson.formSeis !== undefined){
      if (this._DataJson.formSeis.status !== 'INVALID') {
        this.formSeisVal = true;
      }
    }

    if(this._DataJson.formSiete !== undefined){
      if (this._DataJson.formSiete.status !== 'INVALID') {
        this.formSieteVal = true;
      }
    }

    if(this._DataJson.formOcho !== undefined){
      if (this._DataJson.formOcho.status !== 'INVALID') {
        this.formOchoVal = true;
      }
    }

   }

}
