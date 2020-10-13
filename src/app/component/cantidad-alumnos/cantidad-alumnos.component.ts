import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { ReplaySubject } from 'rxjs';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cantidad-alumnos',
  templateUrl: './cantidad-alumnos.component.html',
})
export class CantidadAlumnosComponent {

  data$: ReplaySubject<any> = new ReplaySubject();
  displayedColumns: string[] = [
    "id_comision", "tramo", "orientacion", "comision_2020", "cantidad"
  ]
  /**
   * Datos principales
   */
  
  constructor(
    protected dd: DataDefinitionService, 
    protected route: ActivatedRoute, 
    protected router: Router,
  ) {}

  ngOnInit(): void {
    this.dd.post("info", "cantidad_alumnos").pipe(first()).subscribe(
      rows => { this.data$.next(rows); }
    ); 
  }

}

