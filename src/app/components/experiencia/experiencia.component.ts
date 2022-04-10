import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';
import { TokenService } from 'src/app/services/token.service';
import { baseUrl } from 'src/app/shared/ruta';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  experiences: Experience[] = [];
  urlserver: string = baseUrl;

  constructor(private portfolioService: PortfolioService, private tokenService: TokenService) { }

  ngOnInit(): void {

    this.portfolioService.getExperience().subscribe(data => {this.experiences = data,
      this.experiences = this.experiences.sort( function (a, b){
        if(Date.parse(a.startDate) > Date.parse(b.startDate))
        return -1;
        if(Date.parse(a.startDate) < Date.parse(b.startDate))
        return 1;
        return 0;
      } )
    });

  }
}
