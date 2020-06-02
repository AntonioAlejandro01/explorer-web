import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkerService } from './services/marker/marker.service';
import { RoutesService } from './services/routes/routes.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [MarkerService, RoutesService],
})
export class CoreModule {}
