import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-load-json',
  templateUrl: './load-json.component.html',
  styleUrls: ['./load-json.component.css']
})
export class LoadJsonComponent {

  archivo?: File;
  data: any;
  error: boolean = false;
  dataVal: boolean = false;
  estVal: boolean = false;
  FormGroup = FormGroup;
  vistaPrevia: boolean = false;

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(
    private fb:FormBuilder, 
    private cd: ChangeDetectorRef,
    private http:HttpClient,
    public _DataJson: DataJsonService,
    ) {
  }

  onFileChange(event) {

    this.archivo = event.target.files[0];

    console.log(this.archivo.type);

    if (this.archivo.type === 'application/json') {
      this.error = false;
      
      const reader = new FileReader();

      if(event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
  
        reader.onload = () => {
          this.formGroup.patchValue({
            file: reader.result
         });
  
          this.http.get(this.formGroup.controls['file'].value).subscribe(
           data => {
            this.data = data;
             this.validarCamposArchivo(data)
           }
         );
  
          // need to run CD since file load runs outside of zone
          console.log(this.cd.markForCheck());
          ;
        };
      }
    }else{
      this.error = true;
      this.dataVal = false;
    }
    
  }

  validarCamposArchivo(data:any) {

    if ( 
      this.data.nivelCero !== undefined && 
      this.data.nivelUno !== undefined && 
      this.data.nivelDos !== undefined && 
      this.data.nivelTres !== undefined && 
      this.data.nivelCuatro !== undefined && 
      this.data.nivelCinco !== undefined && 
      this.data.nivelSeis !== undefined && 
      this.data.nivelSiete !== undefined && 
      this.data.nivelOcho !== undefined 
      ) {
        this.dataVal = true;

        this.initCero();

        console.log(this.data);
    }else{
      console.log('no naishu :c');
      this.dataVal = false;
      this.estVal = true;
    }
    
  }

  initCero(){
    if ( this._DataJson.formCero === undefined ) {
      this._DataJson.formCero = this.fb.group({
        'claveComponente': new FormControl(this.data.nivelCero.claveComponente,[
          Validators.required
        ]),
        'nombreComponente': new FormControl(this.data.nivelCero.nombreComponente,[
          Validators.required
        ]),
        'tipo': new FormControl(this.data.nivelCero.tipo,[
          Validators.required
        ]),
        'clasACM': new FormControl(this.data.nivelCero.clasACM,[
          Validators.required
        ]),
        'autores': this.fb.array([]),
        'descProblema': new FormControl(this.data.nivelCero.descProblema, [
          Validators.required
        ]),
        'reqFuncionales': new FormArray([
  
        ]),
        'reqNoFuncionales': new FormArray([
  
        ]),
        'aportacion': new FormControl(this.data.nivelCero.aportacion,[
          Validators.required
        ]),
        'similitud': new FormControl(this.data.nivelCero.aportacion,[
          Validators.required
        ]),
        'sintaxis': this.fb.array([]),
      });

      this.data.nivelCero.autores.forEach(element => {
        (<FormArray>this._DataJson.formCero.controls['autores']).push(
          this.fb.group({
            nombreAutor: new FormControl(element.nombreAutor),
            correoAutor: new FormControl(element.correoAutor),
            aliasGitlab: new FormControl(element.aliasGitlab),
          })
        )
      });

      this.data.nivelCero.reqFuncionales.forEach(element => {
        (<FormArray>this._DataJson.formCero.controls['reqFuncionales']).push(
          new FormControl(element, Validators.required)
        )
      });

      this.data.nivelCero.reqNoFuncionales.forEach(element => {
        (<FormArray>this._DataJson.formCero.controls['reqNoFuncionales']).push(
          new FormControl(element, Validators.required)
        )
      });

      this.data.nivelCero.sintaxis.forEach(element => {
        (<FormArray>this._DataJson.formCero.controls['sintaxis']).push(
          this.fb.group({
            param: new FormControl(element.param, [
              Validators.required
            ]),
            tipoparam: new FormControl(element.tipoparam,[
              Validators.required
            ]),
            descripcion: new FormControl(element.descripcion,[
              Validators.required
            ])
          })
        )
      });
  
    }
  }

}


