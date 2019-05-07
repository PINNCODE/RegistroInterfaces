import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-madcuatroform',
  templateUrl: './madcuatroform.component.html',
  styleUrls: ['./madcuatroform.component.css']
})
export class MadcuatroformComponent {

  formularioCuatro: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formularioCuatro = this.fb.group({
      
    })

   }

}
