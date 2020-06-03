import {
  Component,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import * as L from 'leaflet';
import { Coordenadas } from 'src/app/core/models/coordenadas.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
  @Output() CoordenadasMarked: EventEmitter<any> = new EventEmitter();
  private coordenadas: Coordenadas;
  private map;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initMap();
    // pedir ubicacion
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.map.panTo({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      });
    }
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.82828, -98.5795],
      zoom: 25,
    });
    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
    this.map.on('click', (e) => {
      console.log(e.latlng.lat);
      console.log(this.coordenadas);
      this.coordenadas = {
        latitud: e.latlng.lat,
        longitud: e.latlng.lng,
      };
      console.log(this.coordenadas);
    });
  }

  markedPlace() {
    console.log('Coordendas marcadas: ', this.coordenadas);
    this.CoordenadasMarked.emit(this.coordenadas);
  }
}
