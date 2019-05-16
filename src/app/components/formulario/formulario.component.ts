import { Component, OnInit } from '@angular/core';
import { DataJsonService } from '../../services/data-json.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(public _DataJson: DataJsonService) { }

  ngOnInit() {
  }

}
