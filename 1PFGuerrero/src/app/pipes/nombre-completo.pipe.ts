import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../alumno/model/alumno';

@Pipe({
  name: 'nombreCompleto' 
})
export class NombreCompletoPipe implements PipeTransform {
  transform(alumno: Alumno): string {
    let nombreCompleto = alumno.primerNombre;
    if (alumno.segundoNombre) {
      nombreCompleto += ' ' + alumno.segundoNombre;
    }
    nombreCompleto += ' ' + alumno.primerApellido;
    if (alumno.segundoApellido) {
      nombreCompleto += ' ' + alumno.segundoApellido;
    }
    return nombreCompleto;
  }
}
