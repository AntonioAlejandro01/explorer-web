import { Component, OnInit } from '@angular/core';
import { Ruta } from './../../../core/models/ruta.model';
import { RoutesService } from 'src/app/core/services/routes/routes.service';
import { RouteResponse } from 'src/app/core/models/routeResponse.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css'],
})
export class ChestComponent implements OnInit {
  options: string[];
  routes: RouteResponse[];
  option: number;
  valueSearch: string;
  constructor(private routeService: RoutesService) {}

  ngOnInit(): void {
    this.options = ['Author', 'Topic', 'Location', 'Title'];
    this.option = 2;
  }

  search() {
    this.routeService
      .getRoutesByFilter({
        type: this.options[this.option],
        value: this.valueSearch,
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.routes = response.body;
        } else if (response.status === 204) {
          alert('No se ha encontrado ninguna ruta');
        } else {
          alert('Server Error');
        }
      });
  }

  onClick(id: string) {
    const ruta = this.routes[id];
    const decision = confirm('Descargar imagen??');
    if (decision) {
      this.routeService.getQRImage(ruta.qrKey).subscribe((response) => {
        if (response.status === 200) {
          if (window.navigator.msSaveOrOpenBlob) {
            // IE specific download.
            navigator.msSaveBlob(response.body, `${ruta.title}.png`);
          } else {
            const downloadLink = document.createElement('a');
            downloadLink.style.display = 'none';
            document.body.appendChild(downloadLink);
            downloadLink.setAttribute(
              'href',
              window.URL.createObjectURL(response.body)
            );
            downloadLink.setAttribute('download', `${ruta.title}.png`);
            downloadLink.click();
            document.body.removeChild(downloadLink);
          }
        }
      });
    }
  }
}
