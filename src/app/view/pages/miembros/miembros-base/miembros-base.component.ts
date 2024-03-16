import { Component } from '@angular/core';
import { Miembro } from 'src/app/models/miembro.interface';

@Component({
  selector: 'app-miembros-base',
  templateUrl: './miembros-base.component.html',
  styleUrls: ['./miembros-base.component.css']
})
export class MiembrosBaseComponent {

  miembros: Miembro[] = [];
  terminoBusqueda: string = '';

  constructor() {
    for (let i = 1; i <= 10; i++) {
      const miembro: Miembro = {
        id: i,
        nombre: `Nombre ${i}`,
        apellido: `Apellido ${i}`,
        documento: `Documento ${i}`,
        nacimiento: new Date(),
        telefono: `Teléfono ${i}`,
        correo: `correo${i}@example.com`,
        editar: () => this.editarMiembro(miembro),
        eliminar: () => this.eliminarMiembro(miembro)
      };
      this.miembros.push(miembro);
    }
  }

  editarMiembro(miembro: Miembro): void {
    console.log('Editar miembro:', miembro);
    // Aquí va la lógica para editar el miembro
  }

  eliminarMiembro(miembro: Miembro): void {
    console.log('Eliminar miembro:', miembro);
    // Aquí va la lógica para eliminar el miembro
  }
}
