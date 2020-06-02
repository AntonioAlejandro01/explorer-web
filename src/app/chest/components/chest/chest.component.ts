import { Component, OnInit } from '@angular/core';
import { Ruta } from './../../../core/models/ruta.model';
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
  constructor() { }

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

  }

  clickListItem(){
    const itemList: HTMLElement = document.querySelector('#valueList');
    const value: string = itemList.textContent;
    console.log(value);
    

  }

}
