import { Component, inject } from '@angular/core';
// import { AppStateService, AuthService} from 'shared-ui';
import { AuthService } from '../../../../../shared-ui/src/lib/auth.service'
import { AppStateService } from '../../../../../shared-ui/src/lib/state.service'
import { ButtonComponent } from '../../../../../shared-ui/src/lib/lib/components/button/button.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  auth = inject(AuthService);
  state = inject(AppStateService);

  addItem() {
    this.state.addToCart({
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1
    });
  }

  addToCart() {
    this.state.addToCart({
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1,
    });
  }

  clearCart() {
    this.state.clearCart();
  }
}
