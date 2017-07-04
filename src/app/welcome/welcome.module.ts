import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { WelcomeComponent } from './welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
    ])
  ]
})
export class WelcomeModule { }
