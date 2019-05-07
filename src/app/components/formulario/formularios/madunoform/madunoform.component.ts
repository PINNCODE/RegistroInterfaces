import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-madunoform',
  templateUrl: './madunoform.component.html',
  styleUrls: ['./madunoform.component.css']
})
export class MadunoformComponent {

  formularioUno: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formularioUno = this.fb.group({
      'descSolucion': new FormControl('',[
        Validators.required
      ]),
      'ejemplos': new FormArray([

      ])
    })

    this.agregarEjemplo();

   }

   agregarEjemplo(){
    (<FormArray>this.formularioUno.controls['ejemplos']).push(
      new FormControl('', Validators.required)
    )
  }

  eliminarEjemplo(idx:number){
    (<FormArray>this.formularioUno.controls['ejemplos']).removeAt(idx);
  }

}
