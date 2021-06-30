import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorEmpresasComponent } from './administrador-categorias/administrador-empresas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AdmicomercioComponent } from './admicomercio/admicomercio.component';
import { IndexComponent } from './index/index.component';
import { AdministrarProductosComponent } from './administrar-productos/administrar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorEmpresasComponent,
    NavbarComponent,
    AdmicomercioComponent,
    IndexComponent,
    AdministrarProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
