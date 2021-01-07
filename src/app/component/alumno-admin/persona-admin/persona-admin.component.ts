import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminComponent } from '@component/admin/admin.component';
import { DataDefinitionService } from '@service/data-definition/data-definition.service';
import { ValidatorsService } from '@service/validators/validators.service';
import { SessionStorageService } from '@service/storage/session-storage.service';
import { emptyUrl } from '@function/empty-url.function';

@Component({
  selector: 'app-alumno-admin',
  templateUrl: './persona-admin.component.html',
})
export class AlumnoAdminComponent extends AdminComponent {

  readonly entityName: string = "alumno";

  constructor(
    protected fb: FormBuilder, 
    protected route: ActivatedRoute, 
    protected router: Router, 
    protected location: Location, 
    protected dd: DataDefinitionService, 
    protected validators: ValidatorsService,
    protected storage: SessionStorageService, 
    protected dialog: MatDialog,
    protected snackBar: MatSnackBar
  ) {
    super(fb, route, router, location, dd, storage, dialog, snackBar);
  }

  setData(): void {
    this.data$.next(null);
  }

  serverData() {  
    this.adminForm.get(this.entityName).get("actualizado").setValue(new Date());
    return this.adminForm.get(this.entityName).value;
    //return this.adminForm.value
  }

  reload(response){
    /**
     * Se reciben los datos del alumno, si existe comision 2020, se redirecciona a una web para visualizar los datos de la comision y profesores
     * Si no existe comision 2020, se imprime un mensaje
     */
    this.router.navigateByUrl('/curso-show' + "?id="+response["id"], {replaceUrl: true});
  }
}

