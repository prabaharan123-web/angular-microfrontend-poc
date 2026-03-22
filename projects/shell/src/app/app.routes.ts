// projects/shell/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation'; // 👈

export const routes: Routes = [
    {
        path: 'remote1',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',        // 👈 tell it to use manifest
                remoteName: 'remote1',   // 👈 matches key in mf.manifest.json
                exposedModule: './Routes'
            }).then(m => m.routes)
    },
    {
        path: 'remote2',
        loadChildren: () =>
            loadRemoteModule({
                type: 'manifest',
                remoteName: 'remote2',   // 👈 matches key in mf.manifest.json
                exposedModule: './Routes'
            }).then(m => m.routes)
    }
];