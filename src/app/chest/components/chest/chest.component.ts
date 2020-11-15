import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogData } from 'src/app/model/dialogData.model';
import { RoutesService } from 'src/app/services/routes.service';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { RouteResponse } from './../../../model/routeResponse.model';
@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.sass']
})
export class ChestComponent implements OnInit {
  options: string[];
  option: number;
  results: RouteResponse[];
  textSearch: string;
  constructor(private routesService: RoutesService, private snackbar: MatSnackBar, private dialog: MatDialog,) { 
    this.options = ['Author', 'Topic', 'Location', 'Title'];
    this.option = 2;
  }

  ngOnInit(): void {
  }

  search(): void {
    this.routesService.getRoutesByFilter({
      type: this.options[this.option],
      value: this.textSearch
    }).subscribe((response) => {
      if (response.status === 200) {
        this.results = response.body;
      }
      else if (response.status === 404) {
        this.snackbar.open('No content');
      }
      else {
        this.snackbar.open('Error');
      }
    });
  }

  onClick(id: number): void{
    const route = this.results[id];
    
    const data: DialogData = {
      rutaResponse: route
    };
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data
    });
  }

}
