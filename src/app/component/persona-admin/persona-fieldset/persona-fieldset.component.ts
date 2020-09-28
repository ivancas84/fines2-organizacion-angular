import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { FieldsetComponent } from '@component/fieldset/fieldset.component';

@Component({
  selector: 'app-persona-fieldset',
  templateUrl: './persona-fieldset.component.html',
})
export class PersonaFieldsetComponent extends FieldsetComponent {

readonly entityName: string = 'persona';

  readonly defaultValues: {[key:string]: any} = {region: "1", distrito: "La Plata", inscripcion_men: false, pc_escritorio: false, net_notebook: false, tablet: false, pc_tablet: false, impresora: false, conexion_internet_paga: false, archivo_2019: false, archivo_2020: false, drive: false, analitico_dni: false, analitico_cuil: false, analitico_partida: false, analitico_certificado: false, activo: true}

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
      region: [null, {
        validators: [Validators.required],
      }],
      distrito: [null, {
        validators: [Validators.required],
      }],
      localidad: [null, {
      }],
      programa: [null, {
      }],
      inscripcion_men: false,
      cens: [null, {
      }],
      sede: [null, {
      }],
      comision: [null, {
      }],
      tramo: [null, {
      }],
      identificador: [null, {
      }],
      numero_inscripcion: [null, {
      }],
      numero_documento: [null, {
        validators: [Validators.required],
        asyncValidators: [this.validators.unique('numero_documento', 'persona')],
      }],
      apellidos: [null, {
      }],
      nombres: [null, {
      }],
      genero: [null, {
      }],
      telefono: [null, {
      }],
      correo: [null, {
      }],
      trayectoria_educativa: [null, {
      }],
      turno: [null, {
      }],
      pc_escritorio: false,
      net_notebook: false,
      tablet: false,
      pc_tablet: false,
      impresora: false,
      conexion_internet_paga: false,
      telefono_celular: [null, {
      }],
      comision_2020: [null, {
      }],
      archivo_2019: false,
      archivo_2020: false,
      drive: false,
      cuil: [null, {
      }],
      analitico_dni: false,
      analitico_cuil: false,
      analitico_partida: false,
      analitico_certificado: false,
      fecha_nacimiento: [null, {
      }],
      ingreso: [null, {
      }],
      observaciones: [null, {
      }],
      activo: false,
      fila: [null, {
        asyncValidators: [this.validators.unique('fila', 'persona')],
      }],
      error: [null, {
      }],
      id_comision: [null, {
      }],
    });
    return fg;
  }

  get id() { return this.fieldset.get('id')}
  get region() { return this.fieldset.get('region')}
  get distrito() { return this.fieldset.get('distrito')}
  get localidad() { return this.fieldset.get('localidad')}
  get programa() { return this.fieldset.get('programa')}
  get inscripcionMen() { return this.fieldset.get('inscripcion_men')}
  get cens() { return this.fieldset.get('cens')}
  get sede() { return this.fieldset.get('sede')}
  get comision() { return this.fieldset.get('comision')}
  get tramo() { return this.fieldset.get('tramo')}
  get identificador() { return this.fieldset.get('identificador')}
  get numeroInscripcion() { return this.fieldset.get('numero_inscripcion')}
  get numeroDocumento() { return this.fieldset.get('numero_documento')}
  get apellidos() { return this.fieldset.get('apellidos')}
  get nombres() { return this.fieldset.get('nombres')}
  get genero() { return this.fieldset.get('genero')}
  get telefono() { return this.fieldset.get('telefono')}
  get correo() { return this.fieldset.get('correo')}
  get trayectoriaEducativa() { return this.fieldset.get('trayectoria_educativa')}
  get turno() { return this.fieldset.get('turno')}
  get pcEscritorio() { return this.fieldset.get('pc_escritorio')}
  get netNotebook() { return this.fieldset.get('net_notebook')}
  get tablet() { return this.fieldset.get('tablet')}
  get pcTablet() { return this.fieldset.get('pc_tablet')}
  get impresora() { return this.fieldset.get('impresora')}
  get conexionInternetPaga() { return this.fieldset.get('conexion_internet_paga')}
  get telefonoCelular() { return this.fieldset.get('telefono_celular')}
  get comision2020() { return this.fieldset.get('comision_2020')}
  get archivo2019() { return this.fieldset.get('archivo_2019')}
  get archivo2020() { return this.fieldset.get('archivo_2020')}
  get drive() { return this.fieldset.get('drive')}
  get cuil() { return this.fieldset.get('cuil')}
  get analiticoDni() { return this.fieldset.get('analitico_dni')}
  get analiticoCuil() { return this.fieldset.get('analitico_cuil')}
  get analiticoPartida() { return this.fieldset.get('analitico_partida')}
  get analiticoCertificado() { return this.fieldset.get('analitico_certificado')}
  get fechaNacimiento() { return this.fieldset.get('fecha_nacimiento')}
  get ingreso() { return this.fieldset.get('ingreso')}
  get observaciones() { return this.fieldset.get('observaciones')}
  get activo() { return this.fieldset.get('activo')}
  get fila() { return this.fieldset.get('fila')}
  get error() { return this.fieldset.get('error')}
  get idComision() { return this.fieldset.get('id_comision')}
  get actualizado() { return this.fieldset.get('actualizado')}
  get informado() { return this.fieldset.get('informado')}

}
