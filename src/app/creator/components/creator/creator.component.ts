import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/core/models/ruta.model';
import { Route } from '@angular/compiler/src/core';
import { RoutesService } from 'src/app/core/services/routes/routes.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  constructor(private routeService: RoutesService) {}

  ngOnInit(): void {}

  rutaCreada(ruta: Ruta) {
    if(ruta){
      this.routeService.postRoute(ruta);
    }
  }
}
