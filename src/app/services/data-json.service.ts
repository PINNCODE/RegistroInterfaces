import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  init: boolean = false;
  load: boolean = false;
  guia: boolean = false;

  downloadJsonHref: any;
  dataForm: FormGroup;
  formCero: FormGroup;
  formUno: FormGroup;
  formDos: FormGroup;
  formTres: FormGroup;
  formCuatro: FormGroup;
  formCinco: FormGroup;
  formSeis: FormGroup;
  formSiete: FormGroup;
  formOcho: FormGroup;

  public dataJson: FormGroup;

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { 
    this.dataForm = this.fb.group({
      'nivelCero': this.formCero,
      'nivelUno': this.formUno,
      'nivelDos': this.formDos,
      'nivelTres': this.formTres,
      'nivelCuatro': this.formCuatro,
      'nivelCinco': this.formCinco,
      'nivelSeis': this.formSeis,
      'nivelSiete': this.formSiete,
      'nivelOcho': this.formOcho
    })
  }

  generarJSON(){
    console.log('DATA: ', this.dataForm.value);
    var theJSON = JSON.stringify(this.dataForm.value);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }

  initApp(){
    this.init = false;
    this.load = false;
    this.guia = false;
  }

  initForm(){
    this.init = true;
    this.load = false;
    this.guia = false;
  }

}
