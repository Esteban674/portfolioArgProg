import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  user= <User>{};

  editing: boolean = false;

  data: string = "Hola mi nombre es Esteban Gabriel Jesus Perea, este Portfolio es el proyecto final del curso" + 
  " #YoProgramo de Argentina Programa. En el cual he aplicado todos los conocimientos adquiridos. Del lado del FrontEnd" + 
  " comenzando con el maquetado del sitio utilizando HTML, CSS y JavaScript, incorporando luego Angular como Framework y TypeScript como lenguaje. Dando uso" + 
  " a muchas de sus herramientas como la creación de componentes, templates, servicios, modulos, directivas, databinding, interfaces, routing, lazyload," + 
  " guards, pipes, formularios Reactivos, sesión de ususario, uso de Bootstrap y PrimeNG como Frameworks Styles. Para la realización del BackEnd" + 
  " se empleó Spring Boot como framework " +
  "+ JPA + Hibernate con Java como lenguaje y MySQL como gestor de base de datos. En base al modelo MVC se crearon las API necesarias para" +
  " responder a todas la peticiones del Front. Se utilizó arquitectura multicapa, Controller, Model, Repository, Service. Anotaciones," +
  ", inyección de dependencias,  Autenticación con JWT, seguridad en rutas con gestión de Roles, upload de imágenes"
  

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    // this.portfolioService.getUser().subscribe(data => {this.user = data;});
  }

  editar(): void {
    this.editing = true;
  }
  guardar(): void {
    this.editing = false;
  }
  cancelar(): void {
    this.editing = false;
  }

}
