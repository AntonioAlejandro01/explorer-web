import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../../models/ruta.model';
import { RouteResponse } from '../../models/routeResponse.model';

const url = 'http://localhost:3333/';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(private httpService: HttpClient) {}

  getRoutesByFilter(object: any) {
    console.log(object);

    return this.httpService.get<RouteResponse[]>(
      `${url}routes/${object.type}/${object.value}`,
      {
        observe: 'response',
      }
    );
  }
  getRouteByLocation(location: string) {
    return this.httpService.get(`${url}routes/${location}`);
  }
  postRoute(route: Ruta) {
    return this.httpService.post(`${url}routes`, route);
  }

  getQRImage(key: string) {
    return this.httpService.get(`${url}images/QR/${key}`);
  }

  getData(key: string) {
    return this.httpService.get(`${url}data/${key}`);
  }
}
