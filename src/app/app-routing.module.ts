import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { UsuarioDetallesComponent } from './views/ejercicio1/usuario-detalles/usuario-detalles.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';


const routes: Routes = [
  {
    path: 'ejercicio1',
    component: Ejercicio1Component
  },
  {
    path: 'ejercicio1/detalles/:id',
    component: UsuarioDetallesComponent
  },
  {
    path: 'ejercicio2',
    component: Ejercicio2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
