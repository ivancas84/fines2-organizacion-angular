import { Component } from '@angular/core';
import { ShowComponent } from '@component/show/show.component';

@Component({
  selector: 'app-ar-persona-show',
  templateUrl: './persona-show.component.html',
})
export class ArPersonaShowComponent extends ShowComponent {

  readonly entityName: string = "persona";

}

