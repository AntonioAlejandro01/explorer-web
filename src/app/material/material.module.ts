import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
  ],
})
export class MaterialModule {}
