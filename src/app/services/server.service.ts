
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private server: string;
  constructor() { }

  setServer(server: string): void {
    this.server = server;
  }

  getServer(): string {
    return `http:\\\\${this.server ? this.server : 'localhost'}:4500`;
  }
}
