import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { UnderlineComponent } from './underline/underline.component';

@NgModule({
  declarations: [ButtonComponent, UnderlineComponent, HeaderComponent],
  imports: [CommonModule, TranslateModule, RouterModule],
  exports: [ButtonComponent, UnderlineComponent, HeaderComponent],
})
export class SharedModule {}
