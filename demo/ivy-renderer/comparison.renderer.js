
export function View_AppComponent_0() {
  return viewDef(0, [
      elementDef(0, 0, null, null, 2, "div", [], null, null, null, null, null),
      elementDef(1, 0, null, null, 1, "p", [], null, null, null, null, null),
      textDef(2, null, ["Hello ", ""])
    ], null, function (check, view) {
      var comp = view.component;
      var value = comp.title;
      check(view, 2, 0, value);
    }
  );
}

import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class AppComponent {
  constructor() {
    this.title = 'World';
  }
  updateTitle() {
    this.title = 'Luxembourg !';
  }
}
AppComponent.ngComponentDef = defineComponent({
  type: AppComponent,
  selectors: [["app-root"]],
  factory: function AppComponent_Factory() { return new AppComponent(); },
  template: function AppComponent_Template(renderFlag, component) {
    if (renderFlag & RenderFlags.Create) {
      elementStart(0, "div");
      elementStart(1, "p");
      text(2);
      elementEnd();
      elementEnd();
    } if (renderFlag & RenderFlags.Update) {
      textBinding(2, interpolation1("Hello ", component.title, ""));
    }
  }
});
//# sourceMappingURL=app.component.js.map
