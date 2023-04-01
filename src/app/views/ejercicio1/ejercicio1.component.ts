import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersResponse } from 'src/app/interfaces/ejercicio1';
import { Ejercicio1Service } from '../../services/ejercicio1.service';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.scss']
})
export class Ejercicio1Component implements OnInit {
 
  usuarios: UsersResponse[] = [];

  //Inyecto servicio ejerc 1 

  constructor (private ej1Service: Ejercicio1Service,
               private router: Router ) {
    console.log('constructor');
  }
 
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ej1Service.getUsers().subscribe(res =>{
        this.usuarios = res;
        console.log(this.usuarios);
    });
  }

    toDetalles(id: any){
      console.log(id)
      this.router.navigateByUrl(`ejercicio1/detalles/${id}`)
    }

    searchText = ''

}
