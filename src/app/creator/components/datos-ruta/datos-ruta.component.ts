import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Place } from 'src/app/core/models/place.model';
import { Field } from 'src/app/core/models/field.model';

import { environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-datos-ruta',
  templateUrl: './datos-ruta.component.html',
  styleUrls: ['./datos-ruta.component.css'],
})
export class DatosRutaComponent implements OnInit {
  @Output() rutaCreada: EventEmitter<any> = new EventEmitter();
  fields:Field[];// campos de la ruta
  places: Place[] = [];
  constructor() {}

  ngOnInit(): void {
    this.fields = env.fieldsRoute.map(title =>({title,value:''}));
  }

  placeCreated(place: Place) {
    this.places.push(place);
    
  }
}
