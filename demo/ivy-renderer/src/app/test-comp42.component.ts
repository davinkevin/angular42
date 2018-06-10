import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp42',
  template: `
    <div>
      <p>Hello {{ title }}</p>
    </div>
  `,
  styles: []
})
export class TestComp42Component implements OnInit {
  title: string = 'world';

  ngOnInit() {
    this.title = "Luxembourg";
  }
}
