import {
  enableProdMode,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

renderComponent(AppComponent as ComponentType<AppComponent>);

/*platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err)); */
