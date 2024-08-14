import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  
  {
    name: 'Components',
    title: true
  },
  
  
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Select',
        url: '/forms/select',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Range',
        url: '/forms/range',
        icon: 'nav-icon-bullet'
      },
      
      
    ]
  },

  {
    name: 'Formularios',
    url: '/tableros',
    iconComponent: { name: 'cil-chart' },
    children: [
 
      {
        name: 'persona',
        url: '/tableros/persona',
        icon: 'nav-icon-bullet'
      },
     
    ]
  },
  
  {
    name: 'Tableros',
    url: '/tableros',
    iconComponent: { name: 'cil-chart' },
    children: [
 
      {
        name: 'Contravenciones',
        url: '/tableros/vigilancia',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Vigilancia y escuela',
        url: '/tableros/escuela',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Delito contra la propiedad',
        url: '/tableros/delito',
        icon: 'nav-icon-bullet'
      }
      ,
      {
        name: 'Violencia de genero',
        url: '/tableros/violencia',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  
  {
    name: 'Gestion de Usuarios',
    url: '/login',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'nav-icon-bullet'
      },
     
    ]
  },
 
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
