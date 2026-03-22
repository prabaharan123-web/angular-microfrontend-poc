import { Injectable, computed, signal } from '@angular/core';

export interface User {
  name: string;
  email: string;
  roles: string[];
  token: string;
}

const AUTH_STORAGE_KEY = 'user';
const AUTH_CHANGED_EVENT = 'mfe-auth-changed';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user = signal<User | null>(null);

  user = computed(() => this._user());
  isLoggedIn = computed(() => !!this._user());

  constructor() {
    this.restoreSession();

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (event) => {
        if (event.key === AUTH_STORAGE_KEY) {
          this.restoreSession();
        }
      });

      window.addEventListener(AUTH_CHANGED_EVENT, (event: Event) => {
        const authEvent = event as CustomEvent<User | null>;
        this.applySession(authEvent.detail);
      });
    }
  }

  login(user: User) {
    this.applySession(user, true);
  }

  logout() {
    this.applySession(null, true);
  }

  restoreSession() {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    this.applySession(saved ? JSON.parse(saved) : null);
  }

  private applySession(user: User | null, persist = false) {
    this._user.set(user);

    if (persist && typeof localStorage !== 'undefined') {
      if (user) {
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }

    if (persist && typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent<User | null>(AUTH_CHANGED_EVENT, {
          detail: user,
        })
      );
    }
  }
}
