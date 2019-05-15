import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent {

  exm : FormGroup

  constructor(private fb: FormBuilder) {
    if ( this.exm === undefined) {
      this.exm = this.fb.group({
        'historico': this.fb.array([])
      })
  
      this.agregarHistorico();
    }
  }

  agregarHistorico(){
    (<FormArray>this.exm.controls['historico']).push(
      this.fb.group({
        tipo: new FormControl('mejora', [
          Validators.required
        ]),
        titulo: new FormControl('Paralelización ',[
          Validators.required
        ]),
        funcion: new FormControl('Se paralelizó el código',[
          Validators.required
        ]),
        fecha: new FormControl('03/04/2018',[
          Validators.required
        ])
      })
    )
   }

   eliminarHistorico(idx:number){
    (<FormArray>this.exm.controls['historico']).removeAt(idx);
  }

}
