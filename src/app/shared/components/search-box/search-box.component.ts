import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @Output() searchClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.valueChange.emit(this.value);
  }

  click(){
    this.searchClick.emit();  
  }


}
