import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madseisform',
  templateUrl: './madseisform.component.html',
  styleUrls: ['./madseisform.component.css']
})
export class MadseisformComponent {

  formularioSeis: FormGroup;

  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) {

    if ( this._DataJson.formSeis === undefined) {
      this._DataJson.formSeis = this.fb.group({
        'compExternos': this.fb.array([])
      })
  
      this.agregarcompExternos();
    }

    this._DataJson.formSeis.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['nivelSeis'].setValue(this._DataJson.formSeis.value);
       }
      }
    )

   }

   agregarcompExternos(){
    (<FormArray>this._DataJson.formSeis.controls['compExternos']).push(
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

   eliminarcompExternos(idx:number){
    (<FormArray>this._DataJson.formSeis.controls['compExternos']).removeAt(idx);
  }

  getControlsFromExternos() {
    return (<FormArray>this._DataJson.formSeis.get('compExternos')).controls;
  }

}
