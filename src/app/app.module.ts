import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio1Component } from './views/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './views/ejercicio2/ejercicio2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioDetallesComponent } from './views/ejercicio1/usuario-detalles/usuario-detalles.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { CarritoComponent } from './views/ejercicio2/carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    NavbarComponent,
    UsuarioDetallesComponent,
    SearchPipe,
    CarritoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
