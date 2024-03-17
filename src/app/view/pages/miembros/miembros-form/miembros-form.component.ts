import { Component, Inject } from '@angular/core';
import { Miembro } from 'src/app/models/miembro.interface';
import { AlertService } from 'src/app/services/alert.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';

@Component({
  selector: 'app-miembros-form',
  templateUrl: './miembros-form.component.html',
  styleUrls: ['./miembros-form.component.css']
})
export class MiembrosFormComponent {

  titulo: string = ''
  subTitulo: string = ''

  formData: Miembro = {
    id: 0,
    nombre: '',
    apellido: '',
    documento: '',
    nacimiento: new Date(),
    telefono: '',
    correo: ''
  }

  constructor(
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    
    if (!data.nuevo) {
      this.cargarInfo(data.body)
    }
    this.cargarTitulo()
  }

  cargarTitulo() {
    if (this.data.nuevo) {
      this.titulo = 'Crear Miembro'
      this.subTitulo = 'Agregue nuevos miembros al club deportivo.'
    } else {
      this.titulo = 'Actualizar Miembro'
      this.subTitulo = 'Edite la informacion de los miembros al club deportivo.'
    }
  }

  cargarInfo(body: Miembro) {
    this.formData = {
      ...body,
      nacimiento: new Date(body.nacimiento)
    };
  }

  guardar(): void {
    if (this.validarDatos()) {
      // Aquí puedes manejar la lógica para guardar los datos del formulario
      console.log('Datos del formulario:', this.formData);
    }
  }

  validarDatos(): boolean {
    // Validar nombre, apellido, documento, nacimiento y telefono como campos obligatorios
    if (!this.formData.nombre || !this.formData.apellido || !this.formData.documento || !this.formData.nacimiento || !this.formData.telefono) {
      this.alert.error('Nombre, apellido, documento, nacimiento y telefono son campos obligatorios.')
      return false;
    }

    // Validar correo electrónico con una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.formData.correo)) {
      this.alert.error('El correo electrónico no tiene una estructura válida.')
      return false;
    }

    // Validar edad (18 años o más)
    const fechaNacimiento = new Date(this.formData.nacimiento);
    const fechaActual = new Date();
    fechaActual.setFullYear(fechaActual.getFullYear() - 18);
    if (fechaNacimiento > fechaActual) {
      this.alert.error('El miembro debe ser mayor de 18 años.')
      return false;
    }

    return true;
  }
}
