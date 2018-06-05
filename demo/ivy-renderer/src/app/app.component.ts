import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>Hello {{ title }}</p>
    </div>`
})
export class AppComponent {
  title = 'World';

  updateTitle() {
    this.title = 'Luxembourg !';
  }
}
