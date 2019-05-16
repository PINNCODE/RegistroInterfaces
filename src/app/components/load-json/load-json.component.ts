import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  FormGroup = FormGroup;
  vistaPrevia: boolean = false;

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(
    private fb:FormBuilder, 
    private cd: ChangeDetectorRef,
    private http:HttpClient,
    public _DataJson: DataJsonService
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
             this.dataVal = true;
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

}
