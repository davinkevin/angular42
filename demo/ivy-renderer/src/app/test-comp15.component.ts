import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comp15',
  template: `
    <div>
      <p>Hello {{ title }}</p>
    </div>
  `,
  styles: []
})
export class TestComp15Component implements OnInit {
  title: string = 'world';

  ngOnInit() {
    this.title = "Luxembourg";
  }
}
