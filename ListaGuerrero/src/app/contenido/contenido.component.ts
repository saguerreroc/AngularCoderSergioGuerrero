import { Component } from '@angular/core';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent  {
  cambiarColor: boolean = false;
  texto: string = 'Texto en minúsculas';

  cambiarColorFuente() {
    this.cambiarColor = !this.cambiarColor;
  }

  alumnos: any[] = [
    { nombre: 'Juan', promedio: 85 },
    { nombre: 'Maria', promedio: 92 },
    { nombre: 'Pedro', promedio: 30 }
  ];

  aplicarEstilo(promedio: number) {
    if (promedio >= 90) {
      return 'excelente';
    } else if (promedio >= 70) {
      return 'bueno';
    } else {
      return 'deficiente';
    }
  }
}
