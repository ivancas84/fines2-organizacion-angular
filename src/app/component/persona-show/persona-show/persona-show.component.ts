import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowComponent } from '@component/show/show.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-persona-show',
  templateUrl: './persona-show.component.html',
})
export class PersonaShowComponent extends ShowComponent {

  readonly entityName: string = "persona";

  constructor(
    protected dd: DataDefinitionService, 
    protected route: ActivatedRoute, 
    protected router: Router,
    protected snackBar: MatSnackBar
  ) {

    super(dd, route, router)
  }
  
  ngOnInit(): void {
    this.load$ = this.route.queryParams.pipe(
      switchMap(
        queryParams => {
          if(!queryParams.hasOwnProperty("id_comision")) {
            this.snackBar.open("Error de parámetros", "X"); 
            return;
          }
          this.load = false;
          this.params = queryParams;       
          this.initDisplay();

          return this.initData().pipe(
            map(
              () => {
                return this.load = true;              
              }
            )
          )
        }
      )
    );
  }

}

