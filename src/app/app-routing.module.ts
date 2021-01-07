import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArPersonaShowComponent } from '@component/alumnos-referentes-show/persona-show/persona-show.component';
import { ListaAlumnosReferenteComponent } from '@component/lista-alumnos-referente/lista-alumnos-referente/lista-alumnos-referente.component';
import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';

const routes: Routes = [
  { path: 'alumnos-referentes-show', component: ArPersonaShowComponent, pathMatch: 'full' },
  { path: 'lista-alumnos-referente', component: ListaAlumnosReferenteComponent, pathMatch: 'full' },
  { path: '**', component: PersonaShowComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
