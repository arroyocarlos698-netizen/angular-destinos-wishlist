import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Saludador } from './saludador/saludador';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje';
import { ListaDestinos } from './lista-destinos/lista-destinos';

@NgModule({
  declarations: [App, Saludador, DestinoViajeComponent, ListaDestinos],
  imports: [BrowserModule],
  bootstrap: [App],
})
export class AppModule {}
