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

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getUser().subscribe(data => {this.user = data;});
   
  }

}
