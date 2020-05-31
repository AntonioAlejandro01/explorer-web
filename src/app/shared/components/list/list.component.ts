import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from './../../../core/models/place.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() places:Place[];
  @Output() clickedPlace:EventEmitter<string> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    this.places.push({
      nombre:"No hay ninguna ruta añadida",
      comment:"",
      coordenadas: {
        latitud:0,
        longitud:0,
      }
    });
  }

  placeClick(event: Event){
    console.log(event.target);
    
  }

}
