import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
var global = global || window;
var Buffer = Buffer || [];
var process = process || {
  env: { DEBUG: undefined },
  version: []
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
