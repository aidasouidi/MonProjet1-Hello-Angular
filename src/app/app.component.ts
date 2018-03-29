import { Component } from '@angular/core';

@Component({
  selector: 'app-démarrage',
    template: ` <div style="text-align:center">
                  <h1>
                    Welcome to {{ title }}!
                  </h1>
                </div>
              `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Asslama Sofrecom dans Angular';
}
