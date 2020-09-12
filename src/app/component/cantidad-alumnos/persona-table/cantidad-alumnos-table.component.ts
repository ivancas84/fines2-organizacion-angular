import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';

@Component({
  selector: 'app-cantidad-alumnos-table',
  templateUrl: './cantidad-alumnos-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class CantidadAlumnosTableComponent extends TableComponent { 
  displayedColumns: string[] = ['id_comision', 'tramo', 'orientacion', 'comision_2020', 'cantidad', "opciones"];

}
