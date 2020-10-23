import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChestRoutingModule } from './chest-routing.module';
import { ChestComponent } from './components/chest/chest.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { DialogInfoComponent } from './components/dialog-info/dialog-info.component';
@NgModule({
  declarations: [ChestComponent, DialogInfoComponent],
  imports: [
    CommonModule,
    ChestRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class ChestModule { }
