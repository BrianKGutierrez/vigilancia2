import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../../services/personal.service';
import { DependenciaService } from '../../../services/dependencia.service';
import { PersonaService } from '../../../services/persona.service';
import { Personal } from '../../../models/personal';
import { Dependencia } from '../../../models/dependencia';
import { Persona } from '../../../models/persona';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'] // Asegúrate de que esto es correcto
})
export class PersonalComponent implements OnInit {
  personales: Personal[] = [];
  dependencias: Dependencia[] = [];
  personal: Personal = new Personal();
  dniPersona: string = '';
  legajo: string = '';
  mensajeError: string = '';

  constructor(
    private personalService: PersonalService,
    private dependenciaService: DependenciaService,
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.getPersonales();
    this.loadDependencias();
  }

  getPersonales(): void {
    this.personalService.getPersonales().subscribe(
      data => this.personales = data,
      error => console.error('Error al obtener los personales:', error)
    );
  }

  loadDependencias(): void {
    this.dependenciaService.getDependencias().subscribe(
      data => this.dependencias = data,
      error => console.error('Error al obtener las dependencias:', error)
    );
  }

  buscarPersonaPorDni(): void {
    this.personaService.getPersonaByDni(this.dniPersona).subscribe(
      (data: Persona) => {
        this.personal.persona = data;
        this.mensajeError = '';
      },
      error => {
        this.mensajeError = 'No se encontró a la persona con el DNI proporcionado.';
        console.error('Error al buscar persona por DNI:', error);
      }
    );
  }

 buscarPersonalPorLegajo(): void {
  this.personalService.getPersonalByLegajo(this.legajo).subscribe(
    (data: Personal) => {
      this.personal = data;

      this.dependenciaService.getDependencia(this.personal.dependencia._id).subscribe(
        (dependencia: Dependencia) => {
          this.personal.dependencia = dependencia;
        },
        (error: any) => console.error('Error al obtener dependencia:', error) // Especifica el tipo de error
      );

      this.dniPersona = this.personal.persona?.dni || '';
      this.mensajeError = '';
    },
    (error: any) => { // Especifica el tipo de error
      this.mensajeError = 'No se encontró al personal con el legajo proporcionado.';
      console.error('Error al buscar personal por legajo:', error);
    }
  );
}

  

  guardarPersonal(): void {
    if (!this.personal.persona._id) {
      this.mensajeError = 'Debe asignar una persona válida antes de guardar el personal.';
      return;
    }

    if (this.personal._id) {
      this.personalService.updatePersonal(this.personal).subscribe(
        () => {
          Swal.fire('Éxito', 'Personal actualizado con éxito', 'success');
          this.getPersonales();
          this.resetForm();
        },
        error => console.error('Error al actualizar el personal:', error)
      );
    } else {
      this.personalService.createPersonal(this.personal).subscribe(
        () => {
          Swal.fire('Éxito', 'Personal creado con éxito', 'success');
          this.getPersonales();
          this.resetForm();
        },
        error => console.error('Error al crear el personal:', error)
      );
    }
  }

  editarPersonal(personal: Personal): void {
    this.personal = { ...personal };
    this.dniPersona = personal.persona.dni || '';
  }

  eliminarPersonal(id: string): void {
    this.personalService.deletePersonal(id).subscribe(
      () => {
        Swal.fire('Éxito', 'Personal eliminado con éxito', 'success');
        this.getPersonales();
      },
      error => console.error('Error al eliminar el personal:', error)
    );
  }

  resetForm(): void {
    this.personal = new Personal();
    this.dniPersona = '';
    this.legajo = '';
    this.mensajeError = '';
  }
}
