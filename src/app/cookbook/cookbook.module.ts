import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CookbookComponent, CookbookResolver } from './index';
import { CookbookRoutingModule } from './cookbook-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CookbookRoutingModule,
  ],
  declarations: [
    CookbookComponent,
  ],
  exports: [
    CookbookComponent,
  ],
  providers: [
    CookbookResolver,
  ],
})

export class CookbookModule { }
