import { Coordenadas } from './coordenadas.model';

export interface Place {
  nombre: string;
  coordenadas: Coordenadas;
  comment: string;
}
