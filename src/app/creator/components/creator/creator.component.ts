import { Component, OnInit } from '@angular/core';
import { Ruta } from 'src/app/core/models/ruta.model';
import { RoutesService } from 'src/app/core/services/routes/routes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})
export class CreatorComponent implements OnInit {
  value: string;
  href: string;
  ruta: any;
  constructor(private routeService: RoutesService, private router: Router) {}

  ngOnInit(): void {}

  rutaCreada(ruta: any) {
    this.ruta = ruta;
    if (ruta) {
      let local: boolean = true;
      if (ruta.subir) {
        this.routeService.postRoute(ruta.ruta).subscribe((response) => {
          if (response.status === 200) {
            local = confirm(
              'Crear en local(si) o descagar desde el servidor(no)'
            );
            if (!local) {
              const body: any = response.body;
              console.log(body);

              this.routeService.getQRImage(body.key).subscribe((response) => {
                if (window.navigator.msSaveOrOpenBlob) {
                  // IE specific download.
                  navigator.msSaveBlob(response.body, `${ruta.ruta.title}.png`);
                } else {
                  const downloadLink = document.createElement('a');
                  downloadLink.style.display = 'none';
                  document.body.appendChild(downloadLink);
                  downloadLink.setAttribute(
                    'href',
                    window.URL.createObjectURL(response.body)
                  );
                  downloadLink.setAttribute(
                    'download',
                    `${ruta.ruta.title}.png`
                  );
                  downloadLink.click();
                  document.body.removeChild(downloadLink);
                }
              });
            }
          }
        });
      }
      if (local) {
        this.value = JSON.stringify(ruta.ruta);
      }
    }
  }

  downloadImage() {
    const src = document.getElementsByTagName('img')[8].src;
    if (window.navigator.msSaveOrOpenBlob) {
      // IE specific download.
      navigator.msSaveBlob(
        window.URL.createObjectURL(src),
        `${this.ruta.ruta.title}.png`
      );
    } else {
      const downloadLink = document.createElement('a');
      downloadLink.style.display = 'none';
      document.body.appendChild(downloadLink);
      downloadLink.setAttribute('href', window.URL.createObjectURL(src));
      downloadLink.setAttribute('download', `${this.ruta.ruta.title}.png`);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }
}
