import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

platformBrowserDynamic().bootstrapModule(AppModule);
// Enable production mode unless running locally
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
