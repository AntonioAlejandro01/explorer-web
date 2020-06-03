import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Input() value: string;
  @Output() searchClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  click() {
    this.searchClick.emit();
  }
}
