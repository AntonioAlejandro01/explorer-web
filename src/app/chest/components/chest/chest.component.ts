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
    console.log(this.option);
    console.log(this.valueSearch);

    this.routeService
      .getRoutesByFilter({
        type: this.options[this.option],
        value: this.valueSearch,
      })
      .subscribe((response) => {
        if (response.status === 200) {
          this.routes = response.body;
        }
      });
  }

  clickListItem() {
    const itemList: HTMLElement = document.querySelector('#valueList');
    const value: string = itemList.textContent;
    console.log(value);
  }
}
