import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from '../alumno-dialog/alumno-dialog.component';
import { Alumno } from '../model/alumno';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit{
  alumnos: Alumno[] = [
    {
      primerNombre: 'Juan',
      primerApellido: 'Perez',
      identificacion: '100234',
      correoElectronico: 'juan@correo.com',
      codigoEstudiantil: 'coder1',
      telefono: '3132398547'
    },
    {
      primerNombre: 'Maria',
      primerApellido: 'Gomez',
      identificacion: '100235',
      correoElectronico: 'maria@correo.com',
      codigoEstudiantil: 'coder2',
      telefono: '3148409565'
    },
  ]
 
  displayedColumns: string[] = ['nombre', 'nombrecompleto','correo', 'acciones'];

  constructor(public dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  openDialog(action: string, alumno?: Alumno): void {
    const dialogRef = this.dialog.open(AlumnoDialogComponent, {
      width: '250px',
      data: { action, alumno }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (action === 'Agregar') {
          this.alumnos.push(result);
          this.alumnos = [...this.alumnos];
        } else if (action === 'Editar') {
          const index = this.alumnos.findIndex(a => a.codigoEstudiantil === result.codigoEstudiantil);
          this.alumnos[index] = result;
          this.alumnos = [...this.alumnos];
        } else if (action === 'Eliminar') {
          const index = this.alumnos.findIndex(a => a.codigoEstudiantil === result.codigoEstudiantil);
          this.alumnos.splice(index, 1);
          this.alumnos = [...this.alumnos];
        }
      }
      this.cdr.detectChanges();
    });
  }
  
}
