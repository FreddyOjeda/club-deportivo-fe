import { Component } from '@angular/core';
import { Miembro } from 'src/app/models/miembro.interface';
import { MatDialog } from '@angular/material/dialog';
import { MiembrosFormComponent } from '../miembros-form/miembros-form.component';

@Component({
  selector: 'app-miembros-base',
  templateUrl: './miembros-base.component.html',
  styleUrls: ['./miembros-base.component.css']
})
export class MiembrosBaseComponent {

  miembros: Miembro[] = [];
  terminoBusqueda: string = '';

  constructor(
    private dialog:MatDialog
  ) {
    for (let i = 1; i <= 10; i++) {
      const miembro: Miembro = {
        id: i,
        nombre: `Nombre ${i}`,
        apellido: `Apellido ${i}`,
        documento: `Documento ${i}`,
        nacimiento: new Date('1990-01-01'),
        telefono: `Teléfono ${i}`,
        correo: `correo${i}@example.com`,
        editar: () => this.editarMiembro(miembro),
        eliminar: () => this.eliminarMiembro(miembro)
      };
      this.miembros.push(miembro);
    }
  }

  openDialog(){
    const dialogRef = this.dialog.open(MiembrosFormComponent, {
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

  editarMiembro(miembro: Miembro): void {
    const dialogRef = this.dialog.open(MiembrosFormComponent, {
      width: '1000px',
      data: {
        nuevo:false,
        body:miembro
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo se cerró');
    });
  }

  eliminarMiembro(miembro: Miembro): void {
    console.log('Eliminar miembro:', miembro);
    // Aquí va la lógica para eliminar el miembro
  }
}
