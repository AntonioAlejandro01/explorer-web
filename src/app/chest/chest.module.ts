import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChestRoutingModule } from './chest-routing.module';
import { ChestComponent } from './components/chest/chest.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ChestComponent],
  imports: [
    CommonModule,
    ChestRoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
  ],
})
export class ChestModule {}
