import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/persona';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona.component.html',
})
export class PersonaComponent implements OnInit {
  personas: Persona[] = [];
  selectedPersona: Persona = new Persona();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getPersonas().subscribe(
      data => {
        this.personas = data;
      },
      error => {
        console.error('Error al obtener las personas', error);
      }
    );
  }
  
  addPersona(): void {
    if (!this.selectedPersona.nombre || !this.selectedPersona.apellido || !this.selectedPersona.dni) {
      Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'warning');
      return;
    }

    this.personaService.createPersona(this.selectedPersona).subscribe(
      res => {
        console.log('Persona creada', res);
        this.getPersonas();
        this.selectedPersona = new Persona();
        Swal.fire('Éxito', 'Persona guardada con éxito', 'success');
      },
      error => {
        console.error('Error al crear persona', error);
        Swal.fire('Error', 'Error al crear la persona', 'error');
      }
    );
  }


  editPersona(persona: Persona): void {
    this.selectedPersona = persona;
  }

  updatePersona(): void {
    if (!this.selectedPersona.nombre || !this.selectedPersona.apellido || !this.selectedPersona.dni) {
      Swal.fire('Formulario incompleto', 'Por favor, completa todos los campos requeridos.', 'warning');
      return;
    }

    this.personaService.updatePersona(this.selectedPersona).subscribe(
      res => {
        console.log('Persona actualizada', res);
        this.getPersonas();
        this.selectedPersona = new Persona();
        Swal.fire('Éxito', 'Persona actualizada con éxito', 'success');
      },
      error => {
        console.error('Error al actualizar persona', error);
        Swal.fire('Error', 'Error al actualizar la persona', 'error');
      }
    );
  }

  deletePersona(id: string): void {
    this.personaService.deletePersona(id).subscribe(
      res => {
        console.log('Persona eliminada', res);
        this.getPersonas();
        Swal.fire('Éxito', 'Persona eliminada con éxito', 'success');
      },
      error => {
        console.error('Error al eliminar persona', error);
        Swal.fire('Error', 'Error al eliminar la persona', 'error');
      }
    );
  }

  resetForm(): void {
    this.selectedPersona = new Persona();
  }

  isFormIncomplete(): boolean {
    return !this.selectedPersona.nombre || !this.selectedPersona.apellido || !this.selectedPersona.dni || 
           !this.selectedPersona.provincia || !this.selectedPersona.departamento || 
           !this.selectedPersona.localidad || !this.selectedPersona.codigoPostal || 
           !this.selectedPersona.domicilio || !this.selectedPersona.fechaNacimiento || 
           !this.selectedPersona.sexo || !this.selectedPersona.edad;
  }
  searchPersonaByDni(dni: string): void {
    this.personaService.getPersonaByDni(dni).subscribe(
      data => {
        if (data) {
          this.selectedPersona = data;
        } else {
          Swal.fire('No encontrado', 'No se encontró ninguna persona con ese DNI', 'info');
        }
      },
      error => {
        console.error('Error al buscar persona por DNI', error);
        Swal.fire('Error', 'Error al buscar la persona por DNI', 'error');
      }
    );
  }
  
}
