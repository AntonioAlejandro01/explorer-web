import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Place } from 'src/app/core/models/place.model';
import { Places } from 'src/app/core/models/places.model';
import { Field } from 'src/app/core/models/field.model';
import { Ruta } from 'src/app/core/models/ruta.model';
import { environment as env} from 'src/environments/environment';

@Component({
  selector: 'app-datos-ruta',
  templateUrl: './datos-ruta.component.html',
  styleUrls: ['./datos-ruta.component.css'],
})
export class DatosRutaComponent implements OnInit {
  @Output() rutaCreada: EventEmitter<any> = new EventEmitter();
  fields:Field[];// campos de la ruta
  checked: boolean;
  places: Place[];
  constructor() {}

  ngOnInit(): void {
    this.fields = env.fieldsRoute.map(title =>({title,value:''}));
   this.places = [];
  
  }
  onClickCreateRoute(){
   this.rutaCreada.emit(this.formatearRuta());
  }

  placeCreated(place: Place){
   
    this.places.push(place);
  }
  formatearRuta(): Ruta{
    return {
      title: this.fields[0].value,
      author: this.fields[1].value,
      location:this.fields[2].value,
      places: this.createPlaces(this.places),
      topic:this.fields[3].value
    };
  }
  createPlaces(places: Place[]): Places{
    const places2: Places = {
      comments : [],
      nombres: [],
      latitudes: [],
      longitudes: [],
    };

    places.forEach(place => {
      places2.nombres.push(place.nombre);
      places2.comments.push(place.comment);
      places2.latitudes.push(place.coordenadas.latitud);
      places2.longitudes.push(place.coordenadas.longitud);
    });
    return places2;

  }
}
