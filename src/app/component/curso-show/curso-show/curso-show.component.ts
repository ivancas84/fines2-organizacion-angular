import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-curso-show',
  templateUrl: './curso-show.component.html',
})
export class CursoShowComponent extends ShowComponent {

  readonly entityName: string = "curso";

  //@override
  initData(): Observable<any>{ 
    return this.data().pipe(
      tap(
          data => {
            this.data$.next(data);
          }
        )
    )
  } 

  data(): Observable<any>{
    /**
     * Conviene no pasar como parametro el valor de collectionSize$
     * puede que se desee que este valor sea opcional al sobrescribir el metodo
     */
    return this.dd._post("info", this.entityName, this.display);
  }

}

