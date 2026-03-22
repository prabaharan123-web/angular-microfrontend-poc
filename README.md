# Angular Micro-Frontend POC

## Architecture
shell (4200) → remote1 (4201)
             → remote2 (4202)
             → shared-ui (library)

## Run Locally
npm install
ng serve shell    
ng serve remote1  
ng serve remote2  

## Key Concepts Implemented
- Webpack Module Federation
- Dynamic remote loading (mf.manifest.json)
- Shared singleton state (AuthService, AppStateService)
- Shared UI components (ButtonComponent)
- Lazy loading via loadRemoteModule()
```

---

### Add This Link to Your Resume 🏆
```
GitHub: github.com/prabaharan123-web/angular-microfrontend-poc
