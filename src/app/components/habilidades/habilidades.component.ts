import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { HardSkills } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {


  habilidades: HardSkills[] = [];
  
  valor: number = 3;

  

  constructor() { }

  ngOnInit(): void {

  
    this.habilidades = [
      {
        name: 'Angular',
        group: 'FrontEnd',
        category: 'Framework',
        status: 'Intermedio',
        severity: 'info'
      },
      {
        name: 'Vue',
        group: 'FrontEnd',
        category: 'Framework',
        status: 'Principante',
        severity: 'warning'
      },
      {
        name: 'React',
        group: 'FrontEnd',
        category: 'Framework',
        status: 'Principante',
        severity: 'warning'
      },
      {
        name: 'Html5',
        group: 'FrontEnd',
        category: 'Basics',
        status: 'Experto',
        severity: 'primary'
      },
      {
        name: 'CSS',
        group: 'FrontEnd',
        category: 'Basics',
        status: 'Intermedio',
        severity: 'info'
      },
      {
        name: 'JavaScript',
        group: 'FrontEnd',
        category: 'Basics',
        status: 'Intermedio',
        severity: 'info'
      },
      {
        name: 'Prime NG',
        group: 'FrontEnd',
        category: 'Styles',
        status: 'Intermedio',
        severity: 'info'

      },
      {
        name: 'Bootstrap',
        group: 'FrontEnd',
        category: 'Styles',
        status: 'Principante',
        severity: 'warning'
      },
      {
        name: 'Node',
        group: 'BackEnd',
        category: 'Framework',
        status: 'Principante',
        severity: 'warning'
      },
      {
        name: 'Java',
        group: 'BackEnd',
        category: 'Lenguaje',
        status: 'Competente',
        severity: 'success'
      }
    ]


  }



  clear(table: Table) {
    table.clear();
    
}

}

