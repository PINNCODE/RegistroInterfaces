import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { DataJsonService } from 'src/app/services/data-json.service';

@Component({
  selector: 'app-madceroform',
  templateUrl: './madceroform.component.html',
  styleUrls: ['./madceroform.component.css']
})
export class MadceroformComponent {

  downloadJsonHref: any;

  nmgcero: Object = {
    claveComponente: '',
    nombreComponente: '',
    tipo: '',
    clasACM: '',
    autores: [{
      nombreAutor: '',
      correoAutor: '',
      aliasGitlab: '',
    }],
    descProblema: '',
    reqFunc: [''],
    reqNoFunc: [''],
    aportacion: '',
    similitud: '',
    sintaxis: [{
      param: '',
      tipoparam: ''
    }],
    fecha: ''
  }

  constructor(
    private fb: FormBuilder,
    public _DataJson: DataJsonService
    ) {
    
    if ( this._DataJson.formCero === undefined ) {
      this._DataJson.formCero = this.fb.group({
        'claveComponente': new FormControl('',[
          Validators.required
        ]),
        'nombreComponente': new FormControl('',[
          Validators.required
        ]),
        'tipo': new FormControl('',[
          Validators.required
        ]),
        'clasACM': new FormControl('',[
          Validators.required
        ]),
        'autores': this.fb.array([]),
        'descProblema': new FormControl('', [
          Validators.required
        ]),
        'reqFuncionales': new FormArray([
  
        ]),
        'reqNoFuncionales': new FormArray([
  
        ]),
        'aportacion': new FormControl('',[
          Validators.required
        ]),
        'similitud': new FormControl('',[
          Validators.required
        ]),
        'sintaxis': this.fb.array([]),
      });
  
      this.agregarRF();
      this.agregarNRF();
      this.agregarAutor();
      this.agregarParametro();
    }

    this._DataJson.formCero.statusChanges.subscribe(
      data => {
       if(data === 'VALID'){
        this._DataJson.dataForm.controls['dataCero'].setValue(this._DataJson.formCero.value);
       }
      }
    )
    
  }

  agregarAutor(){
    (<FormArray>this._DataJson.formCero.controls['autores']).push(
      this.fb.group({
        nombreAutor: new FormControl(''),
        correoAutor: new FormControl(''),
        aliasGitlab: new FormControl(''),
      })
    )
  }

  agregarParametro(){
    (<FormArray>this._DataJson.formCero.controls['sintaxis']).push(
      this.fb.group({
        param: new FormControl('', [
          Validators.required
        ]),
        tipoparam: new FormControl('',[
          Validators.required
        ]),
      })
    )
  }

  agregarRF(){
    (<FormArray>this._DataJson.formCero.controls['reqFuncionales']).push(
      new FormControl('', Validators.required)
    )
  }

  agregarNRF(){
    (<FormArray>this._DataJson.formCero.controls['reqNoFuncionales']).push(
      new FormControl('', Validators.required)
    )
  }

  eliminarAutor(idx:number){
    (<FormArray>this._DataJson.formCero.controls['autores']).removeAt(idx);
  }

  eliminarParametro(idx:number){
    (<FormArray>this._DataJson.formCero.controls['sintaxis']).removeAt(idx);
  }

  eliminarRF(idx:number){
    (<FormArray>this._DataJson.formCero.controls['reqFuncionales']).removeAt(idx);
  }

  eliminarNRF(idx:number){
    (<FormArray>this._DataJson.formCero.controls['reqNoFuncionales']).removeAt(idx);
  }

  getControlsFromAutores() {
    return (<FormArray>this._DataJson.formCero.get('autores')).controls;
  }

  getControlsFromRF() {
    return (<FormArray>this._DataJson.formCero.get('reqFuncionales')).controls;
  }

  getControlsFromRNF() {
    return (<FormArray>this._DataJson.formCero.get('reqNoFuncionales')).controls;
  }
  
  getControlsFromSintaxis() {
    return (<FormArray>this._DataJson.formCero.get('sintaxis')).controls;
  }

}
