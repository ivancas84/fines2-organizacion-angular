import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';
import { CantidadAlumnosComponent } from '@component/cantidad-alumnos/cantidad-alumnos.component';

const routes: Routes = [
  { path: 'persona-show', component: PersonaShowComponent, pathMatch: 'full' },
  { path: '**', component: CantidadAlumnosComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
