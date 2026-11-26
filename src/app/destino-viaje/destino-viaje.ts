import { Component, HostBinding, Input } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  standalone: false,
  selector: 'li[app-destino-viaje]',
  templateUrl: './destino-viaje.html',
  styleUrl: './destino-viaje.css',
})
export class DestinoViajeComponent {
  @Input({ required: true }) destino!: DestinoViaje;
  @HostBinding('class') cssClass = 'col-12 col-md-6 col-lg-4 mb-4';
}
