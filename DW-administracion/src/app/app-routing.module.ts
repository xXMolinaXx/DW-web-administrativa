import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorEmpresasComponent } from './administrador-categorias/administrador-empresas.component';
import { AdmicomercioComponent } from './admicomercio/admicomercio.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  { path: 'categorias', component:AdministradorEmpresasComponent  },
  { path: 'empresas/:idCategoria/:nombreCategoria', component:AdmicomercioComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
