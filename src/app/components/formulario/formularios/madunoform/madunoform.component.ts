import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madunoform',
  templateUrl: './madunoform.component.html',
  styleUrls: ['./madunoform.component.css']
})
export class MadunoformComponent {

  formularioUno: FormGroup;

  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) {

    if (this._DataJson.formUno === undefined) {
      
      this._DataJson.formUno = this.fb.group({
        'descSolucion': new FormControl('',[
          Validators.required
        ]),
        'ejemplos': this.fb.array([])
      })
  
      this.agregarEjemplo();
    }

    this._DataJson.formUno.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['dataUno'].setValue(this._DataJson.formUno.value);
       }
      }
    )

   }

   agregarEjemplo(){
    (<FormArray>this._DataJson.formUno.controls['ejemplos']).push(
      new FormControl('', Validators.required)
    )
  }

  eliminarEjemplo(idx:number){
    (<FormArray>this._DataJson.formUno.controls['ejemplos']).removeAt(idx);
  }

  getControlsFromEjemplos() {
    return (<FormArray>this._DataJson.formUno.controls['ejemplos']).controls;
  }

}
