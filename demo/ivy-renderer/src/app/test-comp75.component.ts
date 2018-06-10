import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp75',
  template: `
    <div>
      <p>Hello {{ title }}</p>
    </div>
  `,
  styles: []
})
export class TestComp75Component implements OnInit {
  title: string = 'world';

  ngOnInit() {
    this.title = "Luxembourg";
  }
}
