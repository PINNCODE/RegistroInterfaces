import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-madceroform',
  templateUrl: './madceroform.component.html',
  styleUrls: ['./madceroform.component.css']
})
export class MadceroformComponent {

  formularioCero: FormGroup;
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

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    console.log(this.nmgcero);

    this.formularioCero = this.fb.group({
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
    this.agregarAutor();
    this.agregarParametro();
  }

  agregarAutor(){
    (<FormArray>this.formularioCero.controls['autores']).push(
      this.fb.group({
        nombreAutor: new FormControl(''),
        correoAutor: new FormControl(''),
        aliasGitlab: new FormControl(''),
      })
    )
  }

  agregarParametro(){
    (<FormArray>this.formularioCero.controls['sintaxis']).push(
      this.fb.group({
        param: new FormControl(''),
        tipoparam: new FormControl(''),
      })
    )
  }

  agregarRF(){
    (<FormArray>this.formularioCero.controls['reqFuncionales']).push(
      new FormControl('', Validators.required)
    )
  }

  agregarNRF(){
    (<FormArray>this.formularioCero.controls['reqNoFuncionales']).push(
      new FormControl('', Validators.required)
    )
  }

  eliminarAutor(idx:number){
    (<FormArray>this.formularioCero.controls['autores']).removeAt(idx);
  }

  eliminarParametro(idx:number){
    (<FormArray>this.formularioCero.controls['sintaxis']).removeAt(idx);
  }

  eliminarRF(idx:number){
    (<FormArray>this.formularioCero.controls['reqFuncionales']).removeAt(idx);
  }

  eliminarNRF(idx:number){
    (<FormArray>this.formularioCero.controls['reqFuncionales']).removeAt(idx);
  }

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.formularioCero.value);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

}
