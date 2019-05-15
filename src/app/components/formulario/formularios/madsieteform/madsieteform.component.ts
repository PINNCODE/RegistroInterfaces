import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madsieteform',
  templateUrl: './madsieteform.component.html',
  styleUrls: ['./madsieteform.component.css']
})
export class MadsieteformComponent {

  constructor( private fb: FormBuilder, public _DataJson: DataJsonService ) { 

    if ( this._DataJson.formSiete === undefined) {
      this._DataJson.formSiete = this.fb.group({
        'historico': this.fb.array([])
      })
  
      this.agregarHistorico();
    }

    this._DataJson.formSiete.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['dataSiete'].setValue(this._DataJson.formSiete.value);
       }
      }
    )

  }

  agregarHistorico(){
    (<FormArray>this._DataJson.formSiete.controls['historico']).push(
      this.fb.group({
        tipo: new FormControl('', [
          Validators.required
        ]),
        titulo: new FormControl('',[
          Validators.required
        ]),
        funcion: new FormControl('',[
          Validators.required
        ]),
        fecha: new FormControl('',[
          Validators.required
        ])
      })
    )
   }

   eliminarHistorico(idx:number){
    (<FormArray>this._DataJson.formSiete.controls['historico']).removeAt(idx);
  }

  getControlsFromHistorico() {
    return (<FormArray>this._DataJson.formSiete.get('historico')).controls;
  }

}
