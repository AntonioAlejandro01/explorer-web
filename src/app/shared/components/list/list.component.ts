import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Place } from './../../../core/models/place.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() places:Place[];
  @Output() clickedPlace:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  placeClick(event: Event){
    console.log(event.target);
    
  }

}
