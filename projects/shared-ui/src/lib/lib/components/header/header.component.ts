// projects/shared-ui/src/lib/components/header/header.component.ts
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth.service';
import { AppStateService } from '../../../state.service';


@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header>
      <nav>
        <a routerLink="/">Home</a> |
        <a routerLink="/remote1">Remote1</a> |
        <a routerLink="/remote2">Remote2</a>

        <span style="float:right">
          @if(auth.isLoggedIn()) {
            👤 {{ auth.user()?.name }} |
            🛒 {{ state.cartCount() }} items |
            <button (click)="auth.logout()">Logout</button>
          } @else {
            <button (click)="login()">Login</button>
          }
        </span>
      </nav>
    </header>
  `,
  styles: [`
    header { background: #333; padding: 10px 20px; }
    nav { color: white; }
    a { color: white; margin-right: 10px; text-decoration: none; }
    button { margin-left: 10px; cursor: pointer; }
  `]
})
export class HeaderComponent {
  auth = inject(AuthService);
  state = inject(AppStateService);

  login() {
    this.auth.login({
      name: 'John',
      email: 'john@example.com',
      roles: ['admin'],
      token: 'abc123'
    });
  }
}