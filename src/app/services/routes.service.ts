import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../model/ruta.model';
import { RouteResponse } from '../model/routeResponse.model';
import { ServerService } from './server.service';
@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  constructor(
    private httpService: HttpClient,
    private serverService: ServerService
  ) {}

  getRoutesByFilter(object: any) {
    return this.httpService.get<RouteResponse[]>(
      `${this.serverService.getServer()}/routes/${object.type}/${object.value}`,
      {
        observe: 'response',
      }
    );
  }
  getRouteByLocation(location: string) {
    return this.httpService.get(
      `${this.serverService.getServer()}/routes/${location}`
    );
  }
  postRoute(route: Ruta) {
    return this.httpService.post(
      `${this.serverService.getServer()}/routes`,
      route,
      {
        observe: 'response',
      }
    );
  }

  getQRImage(key: string) {
    return this.httpService.get(
      `${this.serverService.getServer()}/images/QR/${key}`,
      {
        responseType: 'blob',
        observe: 'response',
      }
    );
  }

  getData(key: string) {
    return this.httpService.get(
      `${this.serverService.getServer()}/data/${key}`,
      {
        observe: 'response',
      }
    );
  }
}
