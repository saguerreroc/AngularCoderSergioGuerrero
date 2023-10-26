import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    {
      primerNombre: 'Juan',
      primerApellido: 'Perez',
      identificacion: '100234',
      correoElectronico: 'juan@correo.com',
      codigoEstudiantil: 'coder1',
      telefono: '3132398547',
    },
    {
      primerNombre: 'Maria',
      primerApellido: 'Gomez',
      identificacion: '100235',
      correoElectronico: 'maria@correo.com',
      codigoEstudiantil: 'coder2',
      telefono: '3148409565',
    },
  ];

  private alumnosSubject = new BehaviorSubject<Alumno[]>(this.alumnos);

  getAlumnos(): Observable<Alumno[]> {
    return this.alumnosSubject.asObservable();
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
    console.log('Alumno agregado:', alumno);
    console.log('Nuevos datos:', this.alumnos);
    this.alumnosSubject.next(...[this.alumnos]);
  }

  editarAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex((a) => a.codigoEstudiantil === alumno.codigoEstudiantil);
    this.alumnos[index] = alumno;
    this.alumnosSubject.next(this.alumnos);
  }

  eliminarAlumno(codigoEstudiantil: string): void {
    const index = this.alumnos.findIndex((a) => a.codigoEstudiantil === codigoEstudiantil);
    this.alumnos.splice(index, 1);
    this.alumnosSubject.next(this.alumnos);
  }
}
