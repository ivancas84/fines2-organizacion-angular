import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

@Component({
  selector: 'app-ar-persona-table',
  templateUrl: './persona-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class ArPersonaTableComponent extends TableComponent { 
  displayedColumns: string[] = ['numero_documento', 'apellidos', 'nombres', 'comision_2020',  'tramo', 'genero', 'telefono', 'correo', 'fecha_nacimiento',  'id_comision'];

}
