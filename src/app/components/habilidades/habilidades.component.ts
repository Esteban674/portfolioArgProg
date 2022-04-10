import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Skills } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { baseUrl } from 'src/app/shared/ruta';


@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {


  habilidades: Skills[] = [];
  urlserver: string = baseUrl;
  valor: number = 3;

  

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {

    this.portfolioService.getSkills().subscribe(data => {
      this.habilidades = data;
    })
  
    // this.habilidades = [
    //   {
    //     name: 'Angular',
    //     group: {name: 'FrontEnd'},
    //     category: {name:'Framework'},
    //     status: {name:'Intermedio', color:'#CAFFBF'}
        
    //   },
    //   {
    //     name: 'Vue',
    //     group: {name: 'FrontEnd'},
    //     category: {name:'Framework'},
    //     status: {name:'Principiante', color:'#FDFFB6'}
      
    //   },
    //   {
    //     name: 'React',
    //     group: {name: 'FrontEnd'},
    //     category: {name:'Framework'},
    //     status: {name:'Principiante', color:'#FDFFB6'}
        
    //   },
    //   {
    //     name: 'Html5',
    //     group: {name: 'FrontEnd'},
    //     category: {name: 'Basics'},
    //     status: {name:'Experto', color: '#BDB2FF'}
      
    //   },
    //   {
    //     name: 'CSS',
    //     group: {name: 'FrontEnd'},
    //     category:{name: 'Basics'},
    //     status: {name:'Intermedio', color: '#CAFFBF'}
        
    //   },
    //   {
    //     name: 'JavaScript',
    //     group: {name: 'FrontEnd'},
    //     category: {name:'Basics'},
    //     status: {name:'Intermedio', color: '#CAFFBF'}
      
    //   },
    //   {
    //     name: 'Prime NG',
    //     group: {name: 'FrontEnd'},
    //     category: {name:'Styles'},
    //     status: {name:'Intermedio', color: '#CAFFBF'}
        

    //   },
    //   {
    //     name: 'Bootstrap',
    //     group: {name: 'FrontEnd'},
    //     category: {name:'Styles'},
    //     status: {name:'Principiante', color:'#FDFFB6'}
      
    //   },
    //   {
    //     name: 'Node',
    //     group: {name: 'BackEnd'},
    //     category: {name:'Framework'},
    //     status: {name:'Principiante', color:'#FDFFB6'}
        
    //   },
    //   {
    //     name: 'Java',
    //     group: {name:'BackEnd'},
    //     category: {name:'Lenguaje'},
    //     status: {name:'Competente', color:'#A0C4FF'}
        
    //   }
    // ]


  }



  clear(table: Table) {
    table.clear();
    
}
   

}

