import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Place } from 'src/app/core/models/place.model';

@Component({
  selector: 'app-datos-ruta',
  templateUrl: './datos-ruta.component.html',
  styleUrls: ['./datos-ruta.component.css'],
})
export class DatosRutaComponent implements OnInit {
  @Output() rutaCreada: EventEmitter<any> = new EventEmitter();

  title: string;
  author: string;
  location: string;
  topic: string;
  constructor() {}

  ngOnInit(): void {}

  placeCreated(place: Place) {}
}
