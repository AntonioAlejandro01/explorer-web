import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { CreatorComponent } from './components/creator/creator.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { MapComponent } from './components/map/map.component';
import { DialogQrComponent } from './components/dialog-qr/dialog-qr.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  declarations: [CreatorComponent, MapComponent, DialogQrComponent],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxQRCodeModule
  ]
})
export class CreatorModule { }
