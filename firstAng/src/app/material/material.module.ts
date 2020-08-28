import { NgModule } from '@angular/core';

import { MatAutocompleteModule, MatInputModule, MatButtonModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge'; 
const MaterialComponents = [
  MatAutocompleteModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
