// projects/shared-ui/src/lib/services/app-state.service.ts
import { Injectable, signal, computed } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface AppSettings {
  theme: 'light' | 'dark';
  language: string;
}

@Injectable({ providedIn: 'root' })
export class AppStateService {
  // Cart state
  private _cart = signal<CartItem[]>([]);
  
  // Settings state
  private _settings = signal<AppSettings>({
    theme: 'light',
    language: 'en'
  });

  // Public readable signals
  cart = computed(() => this._cart());
  cartCount = computed(() => this._cart().length);
  cartTotal = computed(() => 
    this._cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  settings = computed(() => this._settings());

  // Cart Actions
  addToCart(item: CartItem) {
    this._cart.update(cart => [...cart, item]);
  }

  removeFromCart(id: number) {
    this._cart.update(cart => cart.filter(item => item.id !== id));
  }

  clearCart() {
    this._cart.set([]);
  }

  // Settings Actions
  setTheme(theme: 'light' | 'dark') {
    this._settings.update(s => ({ ...s, theme }));
  }
}