import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp67',
  template: `
    <div>
      <p>Hello {{ title }}</p>
    </div>
  `,
  styles: []
})
export class TestComp67Component implements OnInit {
  title: string = 'world';

  ngOnInit() {
    this.title = "Luxembourg";
  }
}
