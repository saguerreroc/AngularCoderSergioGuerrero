import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDialogComponent } from '../alumno-dialog/alumno-dialog.component';
import { Alumno } from '../model/alumno';
import { AlumnoService } from '../services/alumnoservice';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit{

  alumnos$: Observable<Alumno[]> = of([]);

  displayedColumns: string[] = ['nombre', 'nombrecompleto','correo', 'acciones'];
  
  constructor(public dialog: MatDialog, private alumnoService: AlumnoService ,private cdr: ChangeDetectorRef) {
    
  }

  ngOnInit() {
    //Actualizo dataSource
    this.alumnos$ = this.alumnoService.getAlumnos();
    
    //Agrego para validar si estan los datos, pero no logro actualizar la tabla con el metodo Async
    this.alumnos$.subscribe(data => {
      console.log('Datos de alumnos:', data);
    });
  }

  openDialog(action: string, alumno?: Alumno): void {
    const dialogRef = this.dialog.open(AlumnoDialogComponent, {
      width: '250px',
      data: { action, alumno },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (action === 'Agregar') {
          this.alumnoService.agregarAlumno(result);
          this.cdr.detectChanges();
        } else if (action === 'Editar') {
          this.alumnoService.editarAlumno(result);
        } else if (action === 'Eliminar') {
          this.alumnoService.eliminarAlumno(result.codigoEstudiantil);
        }
      }
    });
  }
  
}
