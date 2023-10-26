import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { FooterComponent } from './footer/footer.component';
import { FormularioComponent } from './formularios/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DrawerService } from './services/drawer.service';
import { AlumnosComponent } from './alumno/alumnos/alumnos.component';
import { AlumnoDialogComponent } from './alumno/alumno-dialog/alumno-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { AlumnoService } from './alumno/services/alumnoservice';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    MenuComponent,
    ToolbarComponent,
    ContenidoComponent,
    FooterComponent,
    FormularioComponent,
    AlumnosComponent,
    AlumnoDialogComponent,
    NombreCompletoPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    MatFormFieldModule
  ],
  providers: [DrawerService,AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
