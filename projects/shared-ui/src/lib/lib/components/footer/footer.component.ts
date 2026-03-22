// projects/shared-ui/src/lib/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'lib-footer',
  standalone: true,
  template: `
    <footer>
      <p>© 2024 MFE Learning App</p>
    </footer>
  `,
  styles: [`
    footer { background: #333; color: white; 
             text-align: center; padding: 10px; 
             position: fixed; bottom: 0; width: 100%; }
  `]
})
export class FooterComponent {}