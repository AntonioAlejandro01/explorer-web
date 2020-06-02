import { Component, OnInit } from '@angular/core';
import { Ruta } from './../../../core/models/ruta.model';
import { RoutesService } from 'src/app/core/services/routes/routes.service';
@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {
  options:string[];
  routes: Ruta[];
  private option: string;
  private valueOption: string;
  constructor(private routeService: RoutesService) { }

  ngOnInit(): void {
    this.options = ['Author','Topic','Location','Title'];
  }

  valueChange(option: string){
    this.option = option;
  }
  change(value: string){
    this.valueOption = value;
  }
  search(){
    // this.routes = this.routeService.getRoutesByFilter({type:this.option,value:this.valueOption})
  }

  clickListItem(){
    const itemList: HTMLElement = document.querySelector('#valueList');
    const value: string = itemList.textContent;
    console.log(value);
    

  }

}
