import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Coordenadas } from 'src/app/model/coordenadas.model';
import { Place } from 'src/app/model/place.model';
import { Places } from 'src/app/model/places.model';
import { Ruta } from 'src/app/model/ruta.model';
import { RoutesService } from 'src/app/services/routes.service';
import { DialogQrComponent } from '../dialog-qr/dialog-qr.component';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.sass'],
})
export class CreatorComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  coordenadas: Coordenadas;
  places: Place[] = [];
  name: string;
  comment: string;
  constructor(
    private formBuilder: FormBuilder,
    private routesService: RoutesService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firstFormGroup = this.formBuilder.group({
      titleCtrl: ['', Validators.required],
      authorCtrl: ['', Validators.required],
      locationCtrl: ['', Validators.required],
      topicCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      numberCtrl: ['', Validators.required],
      nameCtrl: [''],
      commentCtrl: [''],
    });
  }

  addCoordenadas(coordenadas: Coordenadas): void {
    this.coordenadas = coordenadas;
  }

  addPlace(): void {
    const values = this.secondFormGroup.value;
    this.places.push({
      nombre: values.nameCtrl,
      comment: values.commentCtrl,
      coordenadas: this.coordenadas,
    });
    this.coordenadas = undefined;
    this.secondFormGroup.controls.numberCtrl.setValue(
      this.places.length.toString()
    );
    this.secondFormGroup.controls.nameCtrl.setValue('');
    this.secondFormGroup.controls.commentCtrl.setValue('');
  }
  private formatRoutes(ruta: {
    title: string;
    author: string;
    location: string;
    topic: string;
    places: Place[];
  }): Ruta {
    const places: Places = {
      nombres: [],
      comments: [],
      latitudes: [],
      longitudes: [],
    };
    ruta.places.forEach((place) => {
      places.nombres.push(place.nombre);
      places.comments.push(place.comment);
      places.latitudes.push(place.coordenadas.latitud);
      places.longitudes.push(place.coordenadas.longitud);
    });
    return {
      title: ruta.title,
      author: ruta.author,
      location: ruta.location,
      topic: ruta.topic,
      places,
    };
  }

  download(): void {
    const form1 = this.firstFormGroup.value;
    const route: Ruta = this.formatRoutes({
      title: form1.titleCtrl,
      author: form1.authorCtrl,
      location: form1.locationCtrl,
      topic: form1.topicCtrl,
      places: this.places,
    });
    this.openDialog(route);
  }
  downloadUpload(): void {
    const form1 = this.firstFormGroup.value;
    const route: Ruta = this.formatRoutes({
      title: form1.titleCtrl,
      author: form1.authorCtrl,
      location: form1.locationCtrl,
      topic: form1.topicCtrl,
      places: this.places,
    });
    this.routesService.postRoute(route).subscribe((response) => {
      if (response.status === 200) {
        this.snackbar.open('Route upload sucessfully');
        this.openDialog(route);
      } else {
        this.snackbar.open('Error ' + response.status);
      }
    });
  }

  openDialog(ruta: Ruta): void {
    const dialogRef = this.dialog.open(DialogQrComponent, {
      data: { ruta },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (confirm('¿Go home?')) {
        this.router.navigate(['/home']);
      }
    });
  }
  reset(any: any): void {
    this.places = [];
  }
}
