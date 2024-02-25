import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export let appConfig: ApplicationConfig;
appConfig = {
    providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)]
};
