import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/interfaces';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {

  experiences: Experience[] = [];


  constructor(private portfolioService: PortfolioService,) { }

  ngOnInit(): void {

    this.portfolioService.getExperience().subscribe(data => {this.experiences = data;});
  }
}
