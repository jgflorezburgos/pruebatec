import { Component } from '@angular/core';
import { ProductsResponse } from 'src/app/interfaces/ejercicio2';
import { HttpClient } from '@angular/common/http';
import { Ejercicio2Service } from 'src/app/services/ejercicio2.service';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.scss']
})
export class Ejercicio2Component {
  
  products!: ProductsResponse[];
  showCart: boolean = false;
  cartItems: ProductsResponse[] = [];
  
  constructor(private ej1Service: Ejercicio2Service){}

  ngOnInit(): void {
    this.ej1Service.getProducts().subscribe((data: ProductsResponse[]) => {
      this.products = data;
    });
  }
  
  toggleCart() {
    this.showCart = !this.showCart;
    if (this.showCart) {
      this.cartItems = this.products.filter(product => product.selected);
    } else {
      this.cartItems = [];
    }
    console.log(this.showCart);
  }

 
  addToCart(product: ProductsResponse): void {
    product.selected = true;
    this.cartItems.push(product);
  }
}