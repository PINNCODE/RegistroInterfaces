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
  nombreArchivo = "Buscar archivo";
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
            this.nombreArchivo = this.archivo.name;
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
        this.estVal = false;
        this.initCero();
        this.initUno();
        this.initDos();
        this.initTres();
        this.initCuatro();
        this.initCinco();
        this.initSeis();
        this.initSiete();
        this.initOcho();
        // console.log(this.data);
    }else{
      this.dataVal = false;
      this.estVal = true;
    }
    
  }

  initCero(){
    if ( this._DataJson.formCero === undefined && this.data.nivelCero !== null) {
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

      this._DataJson.dataForm.controls['nivelCero'].setValue(this._DataJson.formCero.value);
  
    }
  }

  initUno(){
    if (this._DataJson.formUno === undefined && this.data.nivelUno !== null) {
      
      this._DataJson.formUno = this.fb.group({
        'descSolucion': new FormControl(this.data.nivelUno.descSolucion,[
          Validators.required
        ]),
        'ejemplos': this.fb.array([])
      })

      this.data.nivelUno.ejemplos.forEach(element => {
      (<FormArray>this._DataJson.formUno.controls['ejemplos']).push(
        new FormControl(element, Validators.required)
      )
      });

      this._DataJson.dataForm.controls['nivelUno'].setValue(this._DataJson.formUno.value);
    }
  }

  initDos(){
    if (this._DataJson.formDos === undefined && this.data.nivelDos !== null) {
      this._DataJson.formDos = this.fb.group({
        'ejemJuguete': this.fb.array([]),
        'ejemPromedio': this.fb.array([]),
        'ejemComplejo': this.fb.array([]),
      })

      this.data.nivelDos.ejemJuguete.forEach(element => {
        (<FormArray>this._DataJson.formDos.controls['ejemJuguete']).push(
          this.fb.group({
            entrada: new FormControl(element.entrada, [
              Validators.required
            ]),
            salida: new FormControl(element.salida,[
              Validators.required
            ]),
            descripcion: new FormControl(element.descripcion,[
              Validators.required
            ]),
          })
        )
      });

      this.data.nivelDos.ejemPromedio.forEach(element => {
        (<FormArray>this._DataJson.formDos.controls['ejemPromedio']).push(
          this.fb.group({
            entrada: new FormControl(element.entrada, [
              Validators.required
            ]),
            salida: new FormControl(element.salida,[
              Validators.required
            ]),
            descripcion: new FormControl(element.descripcion,[
              Validators.required
            ]),
          })
        )
      });

      this.data.nivelDos.ejemComplejo.forEach(element => {
        (<FormArray>this._DataJson.formDos.controls['ejemComplejo']).push(
          this.fb.group({
            entrada: new FormControl(element.entrada, [
              Validators.required
            ]),
            salida: new FormControl(element.salida,[
              Validators.required
            ]),
            descripcion: new FormControl(element.descripcion,[
              Validators.required
            ]),
          })
        )
      });

      this._DataJson.dataForm.controls['nivelDos'].setValue(this._DataJson.formDos.value);
    }
  }

  initTres(){

    if (this._DataJson.formTres === undefined && this.data.nivelTres !== null) {
      this._DataJson.formTres = this.fb.group({
        'descCasoComplejo': this.fb.array([])
      })

      this.data.nivelTres.descCasoComplejo.forEach(element => {
        (<FormArray>this._DataJson.formTres.controls['descCasoComplejo']).push(
          this.fb.group({
            descripcion: new FormControl(element.descripcion,[
              Validators.required
            ]),
          })
        )
      });

      this._DataJson.dataForm.controls['nivelTres'].setValue(this._DataJson.formTres.value);
      
    }

  }

  initCuatro(){

    if (this._DataJson.formCuatro === undefined && this.data.nivelCuatro !== null) {
      this._DataJson.formCuatro = this.fb.group({
        'compPadre': this.fb.array([]),
        'compHijo': this.fb.array([]),
      })

      this.data.nivelCuatro.compPadre.forEach(element => {
        (<FormArray>this._DataJson.formCuatro.controls['compPadre']).push(
          this.fb.group({
            nombre: new FormControl(element.nombre, [
              Validators.required
            ]),
            funcion: new FormControl(element.funcion,[
              Validators.required
            ]),
            referencia: new FormControl(element.referencia,[
              Validators.required
            ]),
            url: new FormControl(element.url,[
              Validators.required
            ])
          })
        )
      });

      this.data.nivelCuatro.compPadre.forEach(element => {
        (<FormArray>this._DataJson.formCuatro.controls['compHijo']).push(
          this.fb.group({
            nombre: new FormControl(element.nombre, [
              Validators.required
            ]),
            funcion: new FormControl(element.funcion,[
              Validators.required
            ]),
            referencia: new FormControl(element.referencia,[
              Validators.required
            ]),
            url: new FormControl(element.url,[
              Validators.required
            ])
          })
        )
      });

      this._DataJson.dataForm.controls['nivelCuatro'].setValue(this._DataJson.formCuatro.value);
  
    }

  }

  initCinco(){
    if ( this._DataJson.formCinco === undefined && this.data.nivelCinco !== null) {
      this._DataJson.formCinco = this.fb.group({
        compPropio: this.fb.array([])
      })

      this.data.nivelCinco.compPropio.forEach(element => {
        (<FormArray>this._DataJson.formCinco.controls['compPropio']).push(
          this.fb.group({
            nombre: new FormControl(element.nombre, [
              Validators.required
            ]),
            funcion: new FormControl(element.funcion,[
              Validators.required
            ]),
            referencia: new FormControl(element.referencia,[
              Validators.required
            ]),
            url: new FormControl(element.url,[
              Validators.required
            ])
          })
        )
      });

      this._DataJson.dataForm.controls['nivelCinco'].setValue(this._DataJson.formCinco.value);
      
    }
  }

  initSeis(){
    if ( this._DataJson.formSeis === undefined && this.data.nivelSeis !== null) {
      this._DataJson.formSeis = this.fb.group({
        compExternos: this.fb.array([])
      })

      this.data.nivelSeis.compExternos.forEach(element => {
        (<FormArray>this._DataJson.formSeis.controls['compExternos']).push(
          this.fb.group({
            nombre: new FormControl(element.nombre, [
              Validators.required
            ]),
            funcion: new FormControl(element.funcion,[
              Validators.required
            ]),
            referencia: new FormControl(element.referencia,[
              Validators.required
            ]),
            url: new FormControl(element.url,[
              Validators.required
            ])
          })
        )
      });

      this._DataJson.dataForm.controls['nivelSeis'].setValue(this._DataJson.formSeis.value);
    }
  }

  initSiete(){
    if ( this._DataJson.formSiete === undefined && this.data.nivelSiete !== null) {
      this._DataJson.formSiete = this.fb.group({
        'historico': this.fb.array([])
      })
  
      this.data.nivelSiete.historico.forEach(element => {
      (<FormArray>this._DataJson.formSiete.controls['historico']).push(
        this.fb.group({
          tipo: new FormControl(element.tipo, [
            Validators.required
          ]),
          titulo: new FormControl(element.titulo,[
            Validators.required
          ]),
          funcion: new FormControl(element.funcion,[
            Validators.required
          ]),
          fecha: new FormControl(element.fecha,[
            Validators.required
          ])
        })
      )
    });
    this._DataJson.dataForm.controls['nivelSiete'].setValue(this._DataJson.formSiete.value);
    }
  }

  initOcho(){

    if ( this._DataJson.formOcho === undefined && this.data.nivelOcho !== null) {
      this._DataJson.formOcho = this.fb.group({
        'exposicion': this.fb.array([])
      })
  
      this.data.nivelOcho.exposicion.forEach(element => {
        (<FormArray>this._DataJson.formOcho.controls['exposicion']).push(
          this.fb.group({
            referencia: new FormControl(element.referencia,[
              Validators.required
            ]),
            funcion: new FormControl(element.funcion,[
              Validators.required
            ]),
            url: new FormControl(element.url,[
              Validators.required
            ])
          })
        )
      });
      this._DataJson.dataForm.controls['nivelOcho'].setValue(this._DataJson.formOcho.value);
    }

  }

}


