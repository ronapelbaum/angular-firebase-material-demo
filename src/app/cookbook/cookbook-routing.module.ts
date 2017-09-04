import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationGuard } from './../shared';
import { CookbookComponent, CookbookResolver } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cookbook',
        component: CookbookComponent,
        canActivate: [
          AuthenticationGuard,
        ],
        resolve: {
          cookbook: CookbookResolver,
        },
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class CookbookRoutingModule { }
