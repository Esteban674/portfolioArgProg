import { Component, OnInit } from '@angular/core';
import { CoursesCertified } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  courses: CoursesCertified[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getCursos().subscribe(data => {this.courses = data;})
  }

}
