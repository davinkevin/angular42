import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div>
      <h1>Welcome to {{ title }}!</h1>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}
