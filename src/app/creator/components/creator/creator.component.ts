import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/core/models/ruta.model';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  correctRoute: boolean;
  private ruta: Ruta;
  constructor() {}

  ngOnInit(): void {}

  rutaCreada(ruta: Ruta) {
    this.ruta = ruta;
  }

  createRoute() {}
}
