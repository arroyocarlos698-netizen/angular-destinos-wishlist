import { Component } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  standalone: false,
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.html',
  styleUrl: './lista-destinos.css',
})
export class ListaDestinos {
  destinos: DestinoViaje[] = [
    new DestinoViaje(
      'Buenos Aires',
      'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=900&q=80',
    ),
  ];

  guardar(nombre: string, imagenUrl: string): void {
    const nombreLimpio = nombre.trim();
    const imagenLimpia = imagenUrl.trim();
    if (!nombreLimpio || !imagenLimpia) return;

    this.destinos.push(new DestinoViaje(nombreLimpio, imagenLimpia));
  }
}
