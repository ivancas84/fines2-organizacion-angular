import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';

@Component({
  selector: 'app-alumno-fieldset',
  templateUrl: './persona-fieldset.component.html',
})
export class AlumnoFieldsetComponent extends FieldsetComponent {

readonly entityName: string = 'alumno';

  readonly defaultValues: {[key:string]: any} = {actualizado:new Date()}

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected router: Router, 
    protected storage: SessionStorageService 
  ) {
    super(router, storage);
  }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      id:null,
    
      numero_documento: [null, {
        validators: [Validators.required],
      }],
      apellidos: [null, {
        validators: [Validators.required],
      }],
      nombres: [null, {
        validators: [Validators.required],
      }],
      telefono: [null, {
        validators: [Validators.required],
      }],
      correo: [null, {
        validators: [Validators.required],
      }],
      fecha_nacimiento: [null, {
        validators: [Validators.required],
      }],      
      observaciones: [null, {
        validators: [Validators.required],
      }],      
      actualizado: [null, {
      }]
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get numeroDocumento() { return this.fieldset.get('numero_documento')}
  get apellidos() { return this.fieldset.get('apellidos')}
  get nombres() { return this.fieldset.get('nombres')}
  get telefono() { return this.fieldset.get('telefono')}
  get correo() { return this.fieldset.get('correo')}
  get fechaNacimiento() { return this.fieldset.get('fecha_nacimiento')}
  get observaciones() { return this.fieldset.get('observaciones')}



}
