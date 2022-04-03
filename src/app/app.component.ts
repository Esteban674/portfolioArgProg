import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor(private primengConfig: PrimeNGConfig){
    
  }

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
