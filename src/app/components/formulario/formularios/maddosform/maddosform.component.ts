import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-maddosform',
  templateUrl: './maddosform.component.html',
  styleUrls: ['./maddosform.component.css']
})
export class MaddosformComponent{

  formularioDos: FormGroup;

  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) {

    if (this._DataJson.formDos === undefined) {
      this._DataJson.formDos = this.fb.group({
        'ejemJuguete': this.fb.array([]),
        'ejemPromedio': this.fb.array([]),
        'ejemComplejo': this.fb.array([]),
      })
  
      this.agregarEjmJuguete();
      this.agregarEjmPromedio();
      this.agregarEjmComplejo();
    }

    this._DataJson.formDos.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['dataDos'].setValue(this._DataJson.formDos.value);
       }
      }
    )

   }

   agregarEjmJuguete(){
    (<FormArray>this._DataJson.formDos.controls['ejemJuguete']).push(
      this.fb.group({
        entrada: new FormControl('', [
          Validators.required
        ]),
        salida: new FormControl('',[
          Validators.required
        ]),
        descripcion: new FormControl('',[
          Validators.required
        ]),
      })
    )
   }

   eliminarEjmJuguete(idx:number){
    (<FormArray>this._DataJson.formDos.controls['ejemJuguete']).removeAt(idx);
  }

  agregarEjmPromedio(){
    (<FormArray>this._DataJson.formDos.controls['ejemPromedio']).push(
      this.fb.group({
        entrada: new FormControl('', [
          Validators.required
        ]),
        salida: new FormControl('',[
          Validators.required
        ]),
        descripcion: new FormControl('',[
          Validators.required
        ]),
      })
    )
   }

   eliminarEjmPromedio(idx:number){
    (<FormArray>this._DataJson.formDos.controls['ejemPromedio']).removeAt(idx);
  }

  agregarEjmComplejo(){
    (<FormArray>this._DataJson.formDos.controls['ejemComplejo']).push(
      this.fb.group({
        entrada: new FormControl('', [
          Validators.required
        ]),
        salida: new FormControl('',[
          Validators.required
        ]),
        descripcion: new FormControl('',[
          Validators.required
        ]),
      })
    )
   }

   eliminarEjmComplejo(idx:number){
    (<FormArray>this._DataJson.formDos.controls['ejemComplejo']).removeAt(idx);
  }

  getControlsFromEjemJuguete() {
    return (<FormArray>this._DataJson.formDos.controls['ejemJuguete']).controls;
  }

  getControlsFromEjemPromedio() {
    return (<FormArray>this._DataJson.formDos.controls['ejemPromedio']).controls;
  }


  getControlsFromEjemComplejo() {
    return (<FormArray>this._DataJson.formDos.get('ejemComplejo')).controls;
  }

}
