import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { FieldsetArrayIdComponent } from '@component/fieldset-array-id/fieldset-array-id.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-persona-fieldset-array',
  templateUrl: './persona-fieldset-array.component.html',
})
export class PersonaFieldsetArrayComponent extends FieldsetArrayIdComponent {

  readonly entityName: string = 'persona';
  readonly idName: string = "id_comision";
  readonly idEntityName: string = "persona";

  readonly defaultValues: {[key:string]: any} = {region: "1", distrito: "La Plata", inscripcion_men: false, pc_escritorio: false, net_notebook: false, tablet: false, pc_tablet: false, impresora: false, conexion_internet_paga: false, archivo_2019: false, archivo_2020: false, drive: false, analitico_dni: false, analitico_cuil: false, analitico_partida: false, analitico_certificado: false, activo: true}

  constructor(
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected router: Router, 
    protected storage: SessionStorageService ,
    protected dialog: MatDialog,

  ) {
    super(router, storage, dd, dialog);
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
        //asyncValidators: [this.validators.unique('numero_documento', 'persona')],
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
        //asyncValidators: [this.validators.unique('fila', 'persona')],
      }],
      error: [null, {
      }],
      id_comision: [null, {
      }],
      _delete: [null, {}]
    });
    return fg;
  }

  id(index: number) { return this.fieldset.at(index).get('id')}
  region(index: number) { return this.fieldset.at(index).get('region')}
  distrito(index: number) { return this.fieldset.at(index).get('distrito')}
  localidad(index: number) { return this.fieldset.at(index).get('localidad')}
  programa(index: number) { return this.fieldset.at(index).get('programa')}
  inscripcionMen(index: number) { return this.fieldset.at(index).get('inscripcion_men')}
  cens(index: number) { return this.fieldset.at(index).get('cens')}
  sede(index: number) { return this.fieldset.at(index).get('sede')}
  comision(index: number) { return this.fieldset.at(index).get('comision')}
  tramo(index: number) { return this.fieldset.at(index).get('tramo')}
  identificador(index: number) { return this.fieldset.at(index).get('identificador')}
  numeroInscripcion(index: number) { return this.fieldset.at(index).get('numero_inscripcion')}
  numeroDocumento(index: number) { return this.fieldset.at(index).get('numero_documento')}
  apellidos(index: number) { return this.fieldset.at(index).get('apellidos')}
  nombres(index: number) { return this.fieldset.at(index).get('nombres')}
  genero(index: number) { return this.fieldset.at(index).get('genero')}
  telefono(index: number) { return this.fieldset.at(index).get('telefono')}
  correo(index: number) { return this.fieldset.at(index).get('correo')}
  trayectoriaEducativa(index: number) { return this.fieldset.at(index).get('trayectoria_educativa')}
  turno(index: number) { return this.fieldset.at(index).get('turno')}
  pcEscritorio(index: number) { return this.fieldset.at(index).get('pc_escritorio')}
  netNotebook(index: number) { return this.fieldset.at(index).get('net_notebook')}
  tablet(index: number) { return this.fieldset.at(index).get('tablet')}
  pcTablet(index: number) { return this.fieldset.at(index).get('pc_tablet')}
  impresora(index: number) { return this.fieldset.at(index).get('impresora')}
  conexionInternetPaga(index: number) { return this.fieldset.at(index).get('conexion_internet_paga')}
  telefonoCelular(index: number) { return this.fieldset.at(index).get('telefono_celular')}
  comision2020(index: number) { return this.fieldset.at(index).get('comision_2020')}
  archivo2019(index: number) { return this.fieldset.at(index).get('archivo_2019')}
  archivo2020(index: number) { return this.fieldset.at(index).get('archivo_2020')}
  drive(index: number) { return this.fieldset.at(index).get('drive')}
  cuil(index: number) { return this.fieldset.at(index).get('cuil')}
  analiticoDni(index: number) { return this.fieldset.at(index).get('analitico_dni')}
  analiticoCuil(index: number) { return this.fieldset.at(index).get('analitico_cuil')}
  analiticoPartida(index: number) { return this.fieldset.at(index).get('analitico_partida')}
  analiticoCertificado(index: number) { return this.fieldset.at(index).get('analitico_certificado')}
  fechaNacimiento(index: number) { return this.fieldset.at(index).get('fecha_nacimiento')}
  ingreso(index: number) { return this.fieldset.at(index).get('ingreso')}
  observaciones(index: number) { return this.fieldset.at(index).get('observaciones')}
  activo(index: number) { return this.fieldset.at(index).get('activo')}
  fila(index: number) { return this.fieldset.at(index).get('fila')}
  error(index: number) { return this.fieldset.at(index).get('error')}
  idComision(index: number) { return this.fieldset.at(index).get('id_comision')}
  actualizado(index: number) { return this.fieldset.at(index).get('actualizado')}
  informado(index: number) { return this.fieldset.at(index).get('informado')}
  _delete(index: number) { return this.fieldset.at(index).get('_delete')}

}
