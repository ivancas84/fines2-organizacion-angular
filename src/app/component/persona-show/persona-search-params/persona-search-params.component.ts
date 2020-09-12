import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Display } from '@class/display';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { SearchParamsComponent } from '@component/search-params/search-params.component';

@Component({
  selector: 'app-persona-search-params',
  templateUrl: './persona-search-params.component.html',
})
export class PersonaSearchParamsComponent extends SearchParamsComponent {

  constructor (
    protected fb: FormBuilder, 
    protected dd: DataDefinitionService
  ) { super(fb); }

  formGroup(): FormGroup {
    let fg: FormGroup = this.fb.group({
      region: null,
      distrito: null,
      localidad: null,
      programa: null,
      inscripcion_men: null,
      cens: null,
      sede: null,
      comision: null,
      tramo: null,
      identificador: null,
      numero_inscripcion: null,
      numero_documento: null,
      apellidos: null,
      nombres: null,
      genero: null,
      telefono: null,
      correo: null,
      trayectoria_educativa: null,
      turno: null,
      pc_escritorio: null,
      net_notebook: null,
      tablet: null,
      pc_tablet: null,
      impresora: null,
      conexion_internet_paga: null,
      telefono_celular: null,
      comision_2020: null,
      archivo_2019: null,
      archivo_2020: null,
      drive: null,
      cuil: null,
      analitico_dni: null,
      analitico_cuil: null,
      analitico_partida: null,
      analitico_certificado: null,
      fecha_nacimiento: null,
      ingreso: null,
      activo: null,
      fila: null,
      id_comision: null,
      actualizado: null,
      informado: null,
    });
    return fg;
  }

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
