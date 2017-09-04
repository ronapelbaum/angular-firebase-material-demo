import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cookbook',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})

export class AppRoutingModule { }
