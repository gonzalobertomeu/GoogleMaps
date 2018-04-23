import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*Material*/
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: []
})
export class MaterialModule { }
