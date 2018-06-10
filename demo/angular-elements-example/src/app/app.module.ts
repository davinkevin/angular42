import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {AngularElementsEvent} from "./angular-elements-event.component";

@NgModule({
  declarations: [AngularElementsEvent],
  entryComponents: [AngularElementsEvent],
  imports: [BrowserModule],
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(AngularElementsEvent, { injector: this.injector });
    customElements.define('angular-elements-event', element);
  }
}
