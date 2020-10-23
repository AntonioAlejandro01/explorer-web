import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coordenadas } from './../../../model/coordenadas.model';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit, AfterViewInit {

  @Output() CoordenadasMarked: EventEmitter<any> = new EventEmitter();
  private coordenadas: Coordenadas;
  private map;
  private marker;
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
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.coordenadas = {
        latitud: e.latlng.lat,
        longitud: e.latlng.lng,
      };
      this.marker = L.marker([e.latlng.lat, e.latlng.lng], {
        title: 'Lugar',
        draggable: false,
      });
      this.marker.addTo(this.map);
      this.CoordenadasMarked.emit(this.coordenadas);
    });
  }
}
