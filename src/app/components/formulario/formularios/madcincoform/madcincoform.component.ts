import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madcincoform',
  templateUrl: './madcincoform.component.html',
  styleUrls: ['./madcincoform.component.css']
})
export class MadcincoformComponent{

  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) {

    if ( this._DataJson.formCinco === undefined) {
      this._DataJson.formCinco = this.fb.group({
        compPropio: this.fb.array([])
      })
      this.agregarcompPadre();
    }

    this._DataJson.formCinco.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['nivelCinco'].setValue(this._DataJson.formCinco.value);
       }
      }
    )

   }

   agregarcompPadre(){
    (<FormArray>this._DataJson.formCinco.controls['compPropio']).push(
      this.fb.group({
        nombre: new FormControl('', [
          Validators.required
        ]),
        funcion: new FormControl('',[
          Validators.required
        ]),
        referencia: new FormControl('',[
          Validators.required
        ]),
        url: new FormControl('',[
          Validators.required
        ])
      })
    )
   }

   eliminarcompPadre(idx:number){
    (<FormArray>this._DataJson.formCinco.controls['compPropio']).removeAt(idx);
  }

  getControlsFromPropio() {
    return (<FormArray>this._DataJson.formCinco.get('compPropio')).controls;
  }

}
