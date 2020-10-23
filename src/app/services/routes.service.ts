import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ruta } from '../model/ruta.model';
import { RouteResponse } from '../model/routeResponse.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  url: string;
  constructor(private httpService: HttpClient) {
    this.url = environment.url;
  }

  getRoutesByFilter(object: any) {
    return this.httpService.get<RouteResponse[]>(
      `${this.url}routes/${object.type}/${object.value}`,
      {
        observe: 'response',
      }
    );
  }
  getRouteByLocation(location: string) {
    return this.httpService.get(`${this.url}routes/${location}`);
  }
  postRoute(route: Ruta) {
    return this.httpService.post(`${this.url}routes`, route, {
      observe: 'response',
    });
  }

  getQRImage(key: string) {
    return this.httpService.get(`${this.url}images/QR/${key}`, {
      responseType: 'blob',
      observe: 'response',
    });
  }

  getData(key: string) {
    return this.httpService.get(`${this.url}data/${key}`,{
      observe: 'response'
    });
  }
}
