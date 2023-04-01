import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsResponse } from '../interfaces/ejercicio2';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio2Service {

  private apiUrl = 'https://fakestoreapi.com/products'

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<ProductsResponse[]>(this.apiUrl);
  }
}
