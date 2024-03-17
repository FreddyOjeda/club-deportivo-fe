import { Component } from '@angular/core';
import { Evento } from 'src/app/models/evento.interface';
import { MatDialog } from '@angular/material/dialog';
import { EventosFormComponent } from '../eventos-form/eventos-form.component';

@Component({
  selector: 'app-eventos-base',
  templateUrl: './eventos-base.component.html',
  styleUrls: ['./eventos-base.component.css']
})
export class EventosBaseComponent {
  eventos: Evento[] = [];
  terminoBusqueda: string = '';

  constructor(
    private dialog: MatDialog
  ) {
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

  openDialog(){
    const dialogRef = this.dialog.open(EventosFormComponent, {
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

  editarMiembro(evento: Evento): void {
    const dialogRef = this.dialog.open(EventosFormComponent, {
      width: '1000px',
      data: {
        nuevo:false,
        body:evento
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  eliminarMiembro(evento: Evento): void {
    console.log('Eliminar miembro:', evento);
    // Aquí va la lógica para eliminar el miembro
  }
}
