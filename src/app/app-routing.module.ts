import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vista/login/login.component'
import { NuevoUsuarioComponent } from './vista/nuevo-usuario/nuevo-usuario.component';
import { EditarComponent } from './vista/usuario/usuario.component';
import { ListaComponent } from './vista/lista/lista.component';
import { EncabezadoComponent } from './plantillas/encabezado/encabezado.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'encabezado', component: EncabezadoComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent},
  { path: 'usuario/:id', component: EditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentes = [LoginComponent, ListaComponent, NuevoUsuarioComponent, EditarComponent]
