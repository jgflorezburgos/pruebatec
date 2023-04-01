import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
// Verificar si el valor de entrada es nulo
    if (!value) return null;
// Verificar si la cadena de búsqueda es nula
    if (!args) return value;

// Convertir la cadena de búsqueda en minúsculas
    args = args.toLowerCase();

  // Filtrar el array de objetos y devolver solo los que contienen 'name'
   const filtrarValor = value.filter((item: any) =>  item.name.toLowerCase().includes(args)
    );
     // Verificar si el array filtrado está vacío
     if (filtrarValor.length === 0) {
      return ['No se encontraron resultados.'];
    } else {
      return filtrarValor;
    }
  }

}