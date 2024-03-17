import { Component } from '@angular/core';
import { Disciplina } from 'src/app/models/disciplina.interface';
import { DisciplinaFormComponent } from '../disciplina-form/disciplina-form.component';
import { ModalService } from 'src/app/services/modal.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-disciplina-base',
  templateUrl: './disciplina-base.component.html',
  styleUrls: ['./disciplina-base.component.css']
})
export class DisciplinaBaseComponent {
  disciplinas: Disciplina[] = [];
  terminoBusqueda: string = '';

  constructor(
    private modal:ModalService,
    private dialog: MatDialog
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
    const dialogRef = this.dialog.open(DisciplinaFormComponent, {
      width: '1000px',
      data:{
        nuevo:true,
        body:null
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  editarMiembro(disciplina: Disciplina): void {
    const dialogRef = this.dialog.open(DisciplinaFormComponent, {
      width: '1000px',
      data: {
        nuevo:false,
        body:disciplina
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  eliminarMiembro(evento: Disciplina): void {
    console.log('Eliminar miembro:', evento);
    // Aquí va la lógica para eliminar el miembro
  }
}
