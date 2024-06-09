import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
		provideHttpClient(withFetch()),
    provideClientHydration()
	],
};
