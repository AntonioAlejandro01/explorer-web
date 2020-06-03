import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selected: string;
  @Input() options: string[];
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  change(){
    this.valueChange.emit(this.selected);
  }

}
