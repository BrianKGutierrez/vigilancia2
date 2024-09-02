import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personal } from '../models/personal'; // Ajusta la ruta según tu estructura de proyecto

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  private apiUrl = 'http://localhost:3000/api/personal'; // Ajusta la URL si es necesario

  constructor(private http: HttpClient) {}

  // Obtener todos los personales
  getPersonales(): Observable<Personal[]> {
    return this.http.get<Personal[]>(this.apiUrl);
  }

  // Obtener un personal por ID
  getPersonal(id: string): Observable<Personal> {
    return this.http.get<Personal>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo personal
  createPersonal(personal: Personal): Observable<Personal> {
    return this.http.post<Personal>(this.apiUrl, personal);
  }

  // Actualizar un personal existente
  updatePersonal(personal: Personal): Observable<Personal> {
    return this.http.put<Personal>(`${this.apiUrl}/${personal._id}`, personal);
  }

  // Eliminar un personal
  deletePersonal(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getPersonalByLegajo(legajo: string): Observable<Personal> {
    return this.http.get<Personal>(`${this.apiUrl}/search/legajo/${legajo}`);
  }
}
