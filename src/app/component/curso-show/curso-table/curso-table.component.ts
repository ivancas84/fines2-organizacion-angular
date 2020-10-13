import { Component } from '@angular/core';
import { TableComponent } from '@component/table/table.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-curso-table',
  templateUrl: './curso-table.component.html',
  styles:[`
  .mat-card-content { overflow-x: auto; }
  .mat-table.mat-table { min-width: 700px; }
  `],
})
export class CursoTableComponent extends TableComponent { 
  displayedColumns: string[] = ["asignatura", "docente"];

  initData(){   
    return this.data$.pipe(
      map(
        response => {
          return response["cursos"];
        }
      )
    );
  }

}
