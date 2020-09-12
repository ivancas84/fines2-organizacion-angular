import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

@Component({
  selector: 'app-persona-table',
  templateUrl: './persona-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class PersonaTableComponent extends TableComponent { 
  displayedColumns: string[] = ['numero_documento', 'apellidos', 'nombres', 'cens',  'comision_2020',  'tramo',  'genero', 'telefono', 'correo', 'fecha_nacimiento',  'id_comision', 'error'];

}
