import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Tableros'
    },
    children: [
      {
        path: '',
        redirectTo: 'vigilancia',
        pathMatch: 'full'
      },
      {
        path: 'vigilancia',
        loadComponent: () => import('./vigilancia/vigilancia.component').then(m => m.VigilanciaComponent),
        data: {
          title: 'Vigilancia'
        }
      },
      {
        path: 'escuela',
        loadComponent: () => import('./escuela/escuela.component').then(m => m.EscuelaComponent),
        data: {
          title: 'Escuela'
        }
      },
      {
        path: 'delito',
        loadComponent: () => import('./delito/delito.component').then(m => m.DelitoComponent),
        data: {
          title: 'delito'
        }
      },
      {
        path: 'violencia',
        loadComponent: () => import('./violencia/violencia.component').then(m => m.ViolenciaComponent),
        data: {
          title: 'Violencia'
        }
      },
      {
        path: 'persona',
        loadComponent: () => import('./persona/persona.component').then(m => m.PersonaComponent),
        data: {
          title: 'Persona'
        }
      }
    ]
  }
];
