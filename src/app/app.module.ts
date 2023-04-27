import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, componentes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './plantillas/cuerpo/cuerpo.component';
import { EncabezadoComponent } from './plantillas/encabezado/encabezado.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    EncabezadoComponent,
    componentes,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
