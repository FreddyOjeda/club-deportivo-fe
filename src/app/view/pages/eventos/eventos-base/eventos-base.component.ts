import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento.interface';

@Component({
  selector: 'app-eventos-base',
  templateUrl: './eventos-base.component.html',
  styleUrls: ['./eventos-base.component.css']
})
export class EventosBaseComponent {
  eventos: Evento[] = [];
  terminoBusqueda: string = '';

  constructor() {
    for (let i = 1; i <= 10; i++) {
      const evento: Evento = {
        id: i,
        nombre: `Evento ${i}`,
        descripcion: `Descripción ${i}`,
        fecha: new Date(),
        editar: () => this.editarMiembro(evento),
        eliminar: () => this.eliminarMiembro(evento)
      };
      this.eventos.push(evento);
    }
  }

  editarMiembro(evento: Evento): void {
    console.log('Editar miembro:', evento);
    // Aquí va la lógica para editar el miembro
  }

  eliminarMiembro(evento: Evento): void {
    console.log('Eliminar miembro:', evento);
    // Aquí va la lógica para eliminar el miembro
  }
}
