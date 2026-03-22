import { loadManifest } from '@angular-architects/module-federation';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

loadManifest('assets/mf.manifest.json',true)
  .then((manifest) => {debugger
    console.log('Manifest loaded ✅', manifest); // 👈 add this
    return bootstrapApplication(AppComponent, appConfig);
  })
  .catch(err => console.error('Manifest failed ❌', err));
