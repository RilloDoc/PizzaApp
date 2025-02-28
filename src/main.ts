import themes from 'devextreme/ui/themes';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

themes.initialized(() => {
  platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
    .catch(err => console.error(err));
});
