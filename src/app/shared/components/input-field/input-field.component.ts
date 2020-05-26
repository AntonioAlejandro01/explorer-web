import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

import { Field } from './../../../core/models/field.model';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  @Input() field: Field;
  constructor() { }
  ngOnInit(): void {
  }
}
