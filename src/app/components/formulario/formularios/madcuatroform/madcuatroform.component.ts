import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madcuatroform',
  templateUrl: './madcuatroform.component.html',
  styleUrls: ['./madcuatroform.component.css']
})
export class MadcuatroformComponent {


  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) {

    if (this._DataJson.formCuatro === undefined) {
      this._DataJson.formCuatro = this.fb.group({
        'compPadre': this.fb.array([]),
        'compHijo': this.fb.array([]),
      })
  
      this.agregarcompPadre();
      this.agregarcompHijo();
    }

    this._DataJson.formCuatro.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['dataCuatro'].setValue(this._DataJson.formCuatro.value);
       }
      }
    )

   }

   agregarcompPadre(){
    (<FormArray>this._DataJson.formCuatro.controls['compPadre']).push(
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
    (<FormArray>this._DataJson.formCuatro.controls['compPadre']).removeAt(idx);
  }

  agregarcompHijo(){
    (<FormArray>this._DataJson.formCuatro.controls['compHijo']).push(
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

   eliminarcompHijo(idx:number){
    (<FormArray>this._DataJson.formCuatro.controls['compHijo']).removeAt(idx);
  }

  getControlsFromHijo() {
    return (<FormArray>this._DataJson.formCuatro.get('compHijo')).controls;
  }

  getControlsFromPadre() {
    return (<FormArray>this._DataJson.formCuatro.get('compPadre')).controls;
  }

}
