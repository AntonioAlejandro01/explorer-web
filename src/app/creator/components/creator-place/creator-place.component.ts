import { Component, OnInit } from '@angular/core';
import { Coordenadas } from 'src/app/core/models/coordenadas.model';

@Component({
  selector: 'app-creator-place',
  templateUrl: './creator-place.component.html',
  styleUrls: ['./creator-place.component.css'],
})
export class CreatorPlaceComponent implements OnInit {
  nombre: string;
  comment: string;
  constructor() {}

  ngOnInit(): void {}

  coordenadasMarked(coordenadasMarked: Coordenadas) {}

  createPlace() {}
}
