import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Coordenadas } from 'src/app/core/models/coordenadas.model';

import { Field } from 'src/app/core/models/field.model';
import { Place } from 'src/app/core/models/place.model';

@Component({
  selector: 'app-creator-place',
  templateUrl: './creator-place.component.html',
  styleUrls: ['./creator-place.component.css'],
})
export class CreatorPlaceComponent implements OnInit {
  namePlace: Field = {
    title: 'Nombre',
    value: '',
  };
  commentPlace: Field = {
    title: 'Comentario',
    value: '',
  };
  coordenadasPlace: Coordenadas;
  @Output() placeAdded: EventEmitter<Place> = new EventEmitter();
  @Input() places: Place[];
  constructor() {}

  ngOnInit(): void {}

  coordenadasMarked(coordenadasMarked: Coordenadas) {
    this.coordenadasPlace = coordenadasMarked;
  }

  createPlace() {
    console.log({
      nombre: this.namePlace.value,
      comment: this.commentPlace.value,
      coordenadas: this.coordenadasPlace,
    });

    this.placeAdded.emit({
      nombre: this.namePlace.value,
      comment: this.commentPlace.value,
      coordenadas: this.coordenadasPlace,
    });

    this.namePlace.value = '';
    this.commentPlace.value = '';
  }
}
