import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <div>
      <nav class='navbar navbar-default'>
          <div class='container-fluid'>
              <ul class='nav navbar-nav'>
                      <li><a [routerLink]= "['/welcome']">Home</a></li>
                      <li><a [routerLink]= "['/product']">Product List</a></li>
              </ul>
          </div>
          <div>
              <router-outlet></router-outlet>
          </div>
      </nav>
    </div>
    `
})
export class AppComponent {
  title = 'Flipkart Vehicles';
}
