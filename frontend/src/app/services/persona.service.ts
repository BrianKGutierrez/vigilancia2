import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';  // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private hostBase: string;

  constructor(private _http: HttpClient) {
    this.hostBase = 'http://localhost:3000/api/persona';
  }

  // Obtener todas las personas
  getPersonas(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase + '/', httpOptions);
  }
// Obtener una persona por DNI
getPersonaByDni(dni: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this._http.get(this.hostBase + '/dni/' + dni, httpOptions);
}

  // Crear una nueva persona
  createPersona(persona: Persona): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(persona);
    return this._http.post(this.hostBase + '/', body, httpOptions);
  }

  // Obtener una persona por ID
  getPersona(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.get(this.hostBase + '/' + id, httpOptions);
  }

  // Editar una persona
  updatePersona(persona: Persona): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let body: any = JSON.stringify(persona);
    return this._http.put(
      this.hostBase + '/' + persona._id,
      body,
      httpOptions
    );
  }

  // Eliminar una persona
  deletePersona(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this._http.delete(this.hostBase + '/' + id, httpOptions);
  }
}
