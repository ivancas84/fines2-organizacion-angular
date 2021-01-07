import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoAdminComponent } from '@component/alumno-admin/persona-admin/persona-admin.component';
import { CantidadAlumnosComponent } from '@component/cantidad-alumnos/cantidad-alumnos.component';
import { CursoShowComponent } from '@component/curso-show/curso-show/curso-show.component';
import { PersonaAdminComponent } from '@component/persona-admin/persona-admin/persona-admin.component';
import { PersonaAdminArrayComponent } from '@component/persona-admin-array/persona-admin-array/persona-admin-array.component';
import { PersonaShowComponent } from '@component/persona-show/persona-show/persona-show.component';
import { ListaAlumnosReferenteComponent } from '@component/lista-alumnos-referentes/lista-alumnos-referente/lista-alumnos-referente.component';
import { ArPersonaShowComponent } from '@component/alumnos-referentes-show/persona-show/persona-show.component';


const routes: Routes = [
  { path: 'alumno-admin', component: AlumnoAdminComponent, pathMatch: 'full' },
  { path: 'cantidad-alumnos', component: CantidadAlumnosComponent, pathMatch: 'full' },
  { path: 'curso-show', component: CursoShowComponent, pathMatch: 'full' },
  { path: 'lista-alumnos-referente', component: ListaAlumnosReferenteComponent, pathMatch: 'full' },
  { path: 'persona-show', component: PersonaShowComponent, pathMatch: 'full' },
  { path: 'persona-admin', component: PersonaAdminComponent, pathMatch: 'full' },
  { path: 'persona-admin-array', component: PersonaAdminArrayComponent, pathMatch: 'full' },
  { path: 'alumnos-referentes-show', component: ArPersonaShowComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
