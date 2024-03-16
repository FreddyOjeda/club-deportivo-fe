import { Component } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina.interface';

@Component({
  selector: 'app-disciplina-base',
  templateUrl: './disciplina-base.component.html',
  styleUrls: ['./disciplina-base.component.css']
})
export class DisciplinaBaseComponent {
  disciplinas: Disciplina[] = [];
  terminoBusqueda: string = '';

  constructor() {
    for (let i = 1; i <= 10; i++) {
      const disciplina: Disciplina = {
        id: i,
        nombre: `Deporte ${i}`,
        modalidad: `Presencial ${i}`,
        editar: () => this.editarMiembro(disciplina),
        eliminar: () => this.eliminarMiembro(disciplina)
      };
      this.disciplinas.push(disciplina);
    }
  }

  editarMiembro(disciplina: Disciplina): void {
    console.log('Editar miembro:', disciplina);
    // Aquí va la lógica para editar el miembro
  }

  eliminarMiembro(evento: Disciplina): void {
    console.log('Eliminar miembro:', evento);
    // Aquí va la lógica para eliminar el miembro
  }
}
