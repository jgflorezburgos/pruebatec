import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
 @Input() cartItems: any;
  
  getTotal() {
    return this.cartItems.reduce((total: any, item: { price: any; }) => total + item.price, 0);
  }
}
