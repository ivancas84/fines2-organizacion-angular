import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

@Component({
  selector: 'app-lista-alumnos-referente-table',
  templateUrl: './lista-alumnos-referente-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class ListaAlumnosReferenteTableComponent extends TableComponent { 
  displayedColumns: string[] = ['id_comision', 'tramo', 'orientacion', 'comision_2020',  "opciones"];

}
