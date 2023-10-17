import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', [Validators.required, this.customValidator]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  customValidator(control: AbstractControl) {
    const value = control.value;
    if (value && value.toLowerCase() === 'ninguno') {
      return { customError: 'No se permite "Ninguno" como nombre.' };
    }
    if(value && value.length <= 3){
      return { customError: 'El nombre es muy corto.' };
    }
    return null;
  }
}
