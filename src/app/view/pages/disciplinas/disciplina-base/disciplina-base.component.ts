import { Component } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina.interface';
import { DisciplinaFormComponent } from '../disciplina-form/disciplina-form.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-disciplina-base',
  templateUrl: './disciplina-base.component.html',
  styleUrls: ['./disciplina-base.component.css']
})
export class DisciplinaBaseComponent {
  disciplinas: Disciplina[] = [];
  terminoBusqueda: string = '';

  constructor(
    private modal:ModalService
  ) {
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
  openDialog(){
    
    this.modal.createModal(DisciplinaFormComponent, this.disciplinas).subscribe((res: any) => {
      console.log("Modal cerrado");
      
    })
  }

  editarMiembro(disciplina: Disciplina): void {
    console.log('Editar miembro:', disciplina);
    
    this.modal.createModal(DisciplinaFormComponent, {isCreate: false, formData: disciplina}).subscribe((res: any) => {
      if (res) {
        console.log("modal cerrado");
        
      }
    });
  }

  eliminarMiembro(evento: Disciplina): void {
    console.log('Eliminar miembro:', evento);
    // Aquí va la lógica para eliminar el miembro
  }
}
