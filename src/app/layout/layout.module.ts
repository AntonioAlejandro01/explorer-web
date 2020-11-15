import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class LayoutModule { }
