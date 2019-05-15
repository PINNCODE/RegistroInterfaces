import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { DataJsonService } from '../../../../services/data-json.service';

@Component({
  selector: 'app-madtresform',
  templateUrl: './madtresform.component.html',
  styleUrls: ['./madtresform.component.css']
})
export class MadtresformComponent{

  formularioTres: FormGroup;

  constructor(private fb: FormBuilder, public _DataJson: DataJsonService) { 
    if (this._DataJson.formTres === undefined) {
      this._DataJson.formTres = this.fb.group({
        'descCasoComplejo': this.fb.array([])
      })
      this.agregardescCasoComplejo()
    }

    this._DataJson.formTres.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['dataTres'].setValue(this._DataJson.formTres.value);
       }
      }
    )
  }

  agregardescCasoComplejo(){
    (<FormArray>this._DataJson.formTres.controls['descCasoComplejo']).push(
      this.fb.group({
        descripcion: new FormControl('',[
          Validators.required
        ]),
      })
    )
  }

  eliminardescCasoComplejo(idx:number){
    (<FormArray>this._DataJson.formTres.controls['descCasoComplejo']).removeAt(idx);
  }

  getControlsFromEjemComplejo() {
    return (<FormArray>this._DataJson.formTres.get('descCasoComplejo')).controls;
  }

}
