import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { baseUrl } from 'src/app/shared/ruta';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educations: Education[] = [];
  urlserver: string = baseUrl;

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getEducation().subscribe(data => {this.educations = data,
      this.educations = this.educations.sort( function (a, b){
        if(Date.parse(a.startDate) > Date.parse(b.startDate))
        return -1;
        if(Date.parse(a.startDate) < Date.parse(b.startDate))
        return 1;
        return 0;
      } )
    });
  }

}
