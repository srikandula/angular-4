import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductListModule } from './product-list/product-list.module';
import { WelcomeModule } from './welcome/welcome.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    NgbModule.forRoot(),
    WelcomeModule,
    ProductListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
