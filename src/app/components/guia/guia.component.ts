import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent {

  exm : FormGroup;
  verInicio: boolean;
  verCarnet: boolean;
  verTutorial: boolean;

  constructor(private fb: FormBuilder,public _DataJson: DataJsonService) {
    this.verInicio = true;
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

  getControlsFromExp() {
    return (<FormArray>this.exm.get('historico')).controls;
  }

  ver(idx:string){
    console.log(idx);
    
    switch(idx){
      case 'inicio':
        this.verCarnet = false;
        this.verTutorial = false;
        this.verInicio = true;
      break;
      case 'carnet':
        this.verInicio = false;
        this.verTutorial = false;
        this.verCarnet = true;
        console.log(this.verCarnet);
        
      break;
      case 'tutorial':
        this.verInicio = false;
        this.verCarnet = false;
        this.verTutorial = true;
      break;

    }
  }

}
