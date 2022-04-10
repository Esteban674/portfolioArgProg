import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { baseUrl } from 'src/app/shared/ruta';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  courses: Course[] = [];
  urlserver: string = baseUrl;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getCourses().subscribe(data => {this.courses = data, 
    this.courses = this.courses.sort( function (a, b){
      if(Date.parse(a.expeditionDate) > Date.parse(b.expeditionDate))
      return -1;
      if(Date.parse(a.expeditionDate) < Date.parse(b.expeditionDate))
      return 1;
      return 0;
    } )
    })
  }

  fecha = new Date();

  fechaAnumero( fechaString: String) {
  
  }

}
