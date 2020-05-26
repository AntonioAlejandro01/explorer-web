import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatorRoutingModule } from './creator-routing.module';
import { MapComponent } from './components/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatorComponent } from './components/creator/creator.component';
import { DatosRutaComponent } from './components/datos-ruta/datos-ruta.component';
import { CreatorPlaceComponent } from './components/creator-place/creator-place.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  declarations: [
    MapComponent,
    CreatorComponent,
    DatosRutaComponent,
    CreatorPlaceComponent,
  ],
  imports: [CommonModule, CreatorRoutingModule, HttpClientModule, FormsModule, SharedModule],
})
export class CreatorModule {}
