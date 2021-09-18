import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { UnderlineComponent } from './underline/underline.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ButtonComponent,
    UnderlineComponent,
    HeaderComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    ButtonComponent,
    UnderlineComponent,
    HeaderComponent,
    InputComponent,
  ],
})
export class SharedModule {}
