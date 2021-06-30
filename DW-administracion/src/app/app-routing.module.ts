import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorEmpresasComponent } from './administrador-categorias/administrador-empresas.component';
import { AdmicomercioComponent } from './admicomercio/admicomercio.component';
import { IndexComponent } from './index/index.component';
import { AdministrarProductosComponent } from './administrar-productos/administrar-productos.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  { path: 'categorias', component:AdministradorEmpresasComponent  },
  { path: 'empresas/:idCategoria/:nombreCategoria', component:AdmicomercioComponent  },
  { path: 'producto/:idComercio/:idCategoria', component:AdministrarProductosComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
