import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  
  
  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-id-card',
        routerLink: '/acercade'
      },
      {
        label: 'Experiencia',
        icon: 'pi pi-briefcase',
        routerLink: '/experiencia'
      },
      {
        label: 'Educación',
        icon: 'pi pi-book',
        routerLink: '/educacion'
      },
      {
        label: 'Cursos',
        icon: 'pi pi-code',
        routerLink: '/cursos'
      },
      {
        label: 'Habilidades',
        icon: 'pi pi-sliders-h',
        routerLink: '/habilidades'
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-inbox',
        routerLink: '/proyectos'
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: '/contacto'
      }
      
  ];
  }

}
