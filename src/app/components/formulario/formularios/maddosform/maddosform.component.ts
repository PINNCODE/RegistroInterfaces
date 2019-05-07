import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-maddosform',
  templateUrl: './maddosform.component.html',
  styleUrls: ['./maddosform.component.css']
})
export class MaddosformComponent{

  formularioDos: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formularioDos = this.fb.group({
      'ejemJuguete': this.fb.array([]),
      'ejemPromedio': this.fb.array([]),
      'ejemComplejo': this.fb.array([]),
    })

    this.agregarEjmJuguete();
    this.agregarEjmPromedio();
    this.agregarEjmComplejo();

   }

   agregarEjmJuguete(){
    (<FormArray>this.formularioDos.controls['ejemJuguete']).push(
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
    (<FormArray>this.formularioDos.controls['ejemJuguete']).removeAt(idx);
  }

  agregarEjmPromedio(){
    (<FormArray>this.formularioDos.controls['ejemPromedio']).push(
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
    (<FormArray>this.formularioDos.controls['ejemPromedio']).removeAt(idx);
  }

  agregarEjmComplejo(){
    (<FormArray>this.formularioDos.controls['ejemComplejo']).push(
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
    (<FormArray>this.formularioDos.controls['ejemComplejo']).removeAt(idx);
  }

}
