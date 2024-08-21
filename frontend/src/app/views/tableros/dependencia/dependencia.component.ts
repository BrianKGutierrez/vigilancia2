// src/app/components/dependencia/dependencia.component.ts
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
  selectedDependencia: Dependencia = new Dependencia();
  searchDni: string = ''; // Campo para buscar por DNI
  foundPersona: Persona | null = null; // Persona encontrada por DNI

  constructor(
    private dependenciaService: DependenciaService,
    private personaService: PersonaService // Inyecta el servicio de Persona
  ) {}

  ngOnInit(): void {
    this.getDependencias();
  }

  getDependencias(): void {
    this.dependenciaService.getDependencias().subscribe(
      data => {
        this.dependencias = data;
      },
      error => {
        console.error('Error al obtener las dependencias', error);
      }
    );
  }

  addDependencia(): void {
    if (this.isFormIncomplete()) {
      Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'warning');
      return;
    }

    this.dependenciaService.createDependencia(this.selectedDependencia).subscribe(
      res => {
        console.log('Dependencia creada', res);
        this.getDependencias();
        this.resetForm();
        Swal.fire('Éxito', 'Dependencia guardada con éxito', 'success');
      },
      error => {
        console.error('Error al crear dependencia', error);
        Swal.fire('Error', 'Error al crear la dependencia', 'error');
      }
    );
  }

  editDependencia(dependencia: Dependencia): void {
    this.selectedDependencia = { ...dependencia };
  }

  updateDependencia(): void {
    if (this.isFormIncomplete()) {
      Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'warning');
      return;
    }

    this.dependenciaService.updateDependencia(this.selectedDependencia).subscribe(
      res => {
        console.log('Dependencia actualizada', res);
        this.getDependencias();
        this.resetForm();
        Swal.fire('Éxito', 'Dependencia actualizada con éxito', 'success');
      },
      error => {
        console.error('Error al actualizar dependencia', error);
        Swal.fire('Error', 'Error al actualizar la dependencia', 'error');
      }
    );
  }

  deleteDependencia(id: string): void {
    this.dependenciaService.deleteDependencia(id).subscribe(
      res => {
        console.log('Dependencia eliminada', res);
        this.getDependencias();
        Swal.fire('Éxito', 'Dependencia eliminada con éxito', 'success');
      },
      error => {
        console.error('Error al eliminar dependencia', error);
        Swal.fire('Error', 'Error al eliminar la dependencia', 'error');
      }
    );
  }

  resetForm(): void {
    this.selectedDependencia = new Dependencia();
    this.searchDni = '';
    this.foundPersona = null;
  }

  isFormIncomplete(): boolean {
    return !this.selectedDependencia.juridiccion || !this.selectedDependencia.localidad || 
           !this.selectedDependencia.domicilio || !this.selectedDependencia.jefe || 
           !this.selectedDependencia.unidad_regional;
  }

  searchPersonaByDni(dni: string): void {
    if (!dni) {
      Swal.fire('Error', 'DNI no puede estar vacío', 'error');
      return;
    }

    this.personaService.getPersonaByDni(dni).subscribe(
      persona => {
        this.foundPersona = persona;
        this.selectedDependencia.jefe = persona; // Asigna la persona encontrada como jefe
        Swal.fire('Éxito', 'Persona encontrada y asignada como jefe', 'success');
      },
      error => {
        console.error('Error al buscar persona', error);
        Swal.fire('Error', 'No se pudo encontrar la persona', 'error');
      }
    );
  }
}
