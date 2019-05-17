import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madochoform',
  templateUrl: './madochoform.component.html',
  styleUrls: ['./madochoform.component.css']
})
export class MadochoformComponent{

  formularioOcho: FormGroup;

  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) {

    if ( this._DataJson.formOcho === undefined ) {
      this._DataJson.formOcho = this.fb.group({
        'exposicion': this.fb.array([])
      })
  
      this.agregarExposicion();
    }

    this._DataJson.formOcho.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['nivelOcho'].setValue(this._DataJson.formOcho.value);
       }
      }
    )

   }

   agregarExposicion(){
    (<FormArray>this._DataJson.formOcho.controls['exposicion']).push(
      this.fb.group({
        referencia: new FormControl('',[
          Validators.required
        ]),
        funcion: new FormControl('',[
          Validators.required
        ]),
        url: new FormControl('',[
          Validators.required
        ])
      })
    )
   }

   eliminarExposicion(idx:number){
    (<FormArray>this._DataJson.formOcho.controls['exposicion']).removeAt(idx);
  }

  getControlsFromExp() {
    return (<FormArray>this._DataJson.formOcho.get('exposicion')).controls;
  }

}
