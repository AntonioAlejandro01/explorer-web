import { Places } from './places.model';
export interface Ruta {
  title: string;
  author: string;
  location: string;
  topic: string;
  places: Places;
}
