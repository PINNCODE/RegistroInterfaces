import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-load-json',
  templateUrl: './load-json.component.html',
  styleUrls: ['./load-json.component.css']
})
export class LoadJsonComponent {

  archivo?: File;
  data: any;
  error: boolean = false;
  FormGroup = FormGroup;
  vistaPrevia: boolean = false;

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

  constructor(
    private fb:FormBuilder, 
    private cd: ChangeDetectorRef,
    private http:HttpClient
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
             console.log(data)
           }
         );
  
          // need to run CD since file load runs outside of zone
          console.log(this.cd.markForCheck());
          ;
        };
      }
    }else{
      this.error = true;
    }
    
  }

}
