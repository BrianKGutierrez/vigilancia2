// // src/app/components/dependencia/dependencia.component.ts
import { Component, OnInit } from '@angular/core';
import { DependenciaService } from '../../../services/dependencia.service';
import { PersonaService } from '../../../services/persona.service'; // Importa el servicio de Persona
import { Dependencia } from '../../../models/dependencia';
import { Persona } from '../../../models/persona'; // Importa el modelo de Persona
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dependencia',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dependencia.component.html',
  styleUrls: ['./dependencia.component.scss'] // Asegúrate de que esto es correcto
})
export class DependenciaComponent implements OnInit {
  dependencias: Dependencia[] = [];
  dependencia: Dependencia = new Dependencia();
  dniJefe: string = '';
  mensajeError: string = '';

  constructor(
    private dependenciaService: DependenciaService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.getDependencias();
  }

  getDependencias(): void {
    this.dependenciaService.getDependencias().subscribe(
      data => this.dependencias = data,
      error => console.error('Error al obtener las dependencias:', error)
    );
  }

  buscarJefePorDni(): void {
    this.personaService.getPersonaByDni(this.dniJefe).subscribe(
      (data: Persona) => {
        this.dependencia.jefe = data;
        this.mensajeError = '';
      },
      error => {
        this.mensajeError = 'No se encontró a la persona con el DNI proporcionado.';
        console.error('Error al buscar jefe por DNI:', error);
      }
    );
  }

  guardarDependencia(): void { 
    if (!this.dependencia.jefe._id) {
      this.mensajeError = 'Debe asignar un jefe válido antes de guardar la dependencia.';
      return;
    }

    if (this.dependencia._id) {
      this.dependenciaService.updateDependencia(this.dependencia).subscribe(
        () => this.getDependencias(),
        error => console.error('Error al actualizar la dependencia:', error)
      );
    } else {
      this.dependenciaService.createDependencia(this.dependencia).subscribe(
        () => {
          this.getDependencias();
          this.resetForm();
        },
        error => console.error('Error al crear la dependencia:', error)
      );
    }
  }

  editarDependencia(dependencia: Dependencia): void {
    this.dependencia = { ...dependencia };
    this.dniJefe = dependencia.jefe.dni || '';
  }

  eliminarDependencia(id: string): void {
    this.dependenciaService.deleteDependencia(id).subscribe(
      () => this.getDependencias(),
      error => console.error('Error al eliminar la dependencia:', error)
    );
  }

  resetForm(): void {
    this.dependencia = new Dependencia();
    this.dniJefe = '';
    this.mensajeError = '';
  }
}