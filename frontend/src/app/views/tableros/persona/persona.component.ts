
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/persona';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [CommonModule, NgModel],
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
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
    this.personaService.createPersona(this.selectedPersona).subscribe(
      res => {
        console.log('Persona creada', res);
        this.getPersonas();
        this.selectedPersona = new Persona(); // Limpiar formulario
      },
      error => {
        console.error('Error al crear persona', error);
      }
    );
  }

  editPersona(persona: Persona): void {
    this.selectedPersona = persona;
  }

  updatePersona(): void {
    this.personaService.updatePersona(this.selectedPersona).subscribe(
      res => {
        console.log('Persona actualizada', res);
        this.getPersonas();
        this.selectedPersona = new Persona(); // Limpiar formulario
      },
      error => {
        console.error('Error al actualizar persona', error);
      }
    );
  }

  deletePersona(id: string): void {
    this.personaService.deletePersona(id).subscribe(
      res => {
        console.log('Persona eliminada', res);
        this.getPersonas();
      },
      error => {
        console.error('Error al eliminar persona', error);
      }
    );
  }

  resetForm(): void {
    this.selectedPersona = new Persona();
  }
}
