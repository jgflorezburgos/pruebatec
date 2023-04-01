import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersResponse } from 'src/app/interfaces/ejercicio1';
import { Ejercicio1Service } from '../../../services/ejercicio1.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.scss']
})
export class UsuarioDetallesComponent {
 
  idUsuario: any ;
  usuario!: UsersResponse;
  
  constructor(private rutaActiva: ActivatedRoute,
    private ejercicio1Service: Ejercicio1Service){}

  ngOnInit() {
   this.idUsuario = this.rutaActiva.snapshot.params['id'];
   console.log(this.idUsuario);
    
   this.ejercicio1Service.getUser(this.idUsuario).subscribe(res =>{
    this.usuario = res;
    console.log(this.usuario);
   })

  }
  

}
