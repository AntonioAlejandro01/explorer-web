import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// Own modules
import { MaterialModule } from './../material/material.module';

// Components
import { HeaderComponent } from './components/header/header.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ListComponent } from './components/list/list.component';
import { SelectComponent } from './components/select/select.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [HeaderComponent, InputFieldComponent, ListComponent, SelectComponent, SearchBoxComponent],
  imports: [CommonModule, MaterialModule, RouterModule, FormsModule],
  exports: [HeaderComponent, InputFieldComponent,ListComponent, SelectComponent,SearchBoxComponent],
})
export class SharedModule {}
