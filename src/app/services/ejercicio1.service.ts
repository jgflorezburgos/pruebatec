import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse } from '../interfaces/ejercicio1';

@Injectable({
  providedIn: 'root'
})
export class Ejercicio1Service {

  url = 'https://jsonplaceholder.typicode.com'

  constructor( private http: HttpClient) { }

  getUsers(){
    return this.http.get<UsersResponse[]>(`${this.url}/users`);
  }

  getUser(id: any){
    return this.http.get<UsersResponse>(`${this.url}/users/${id}`)
  }
}
