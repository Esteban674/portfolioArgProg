import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';
import Typed from 'typed.js';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';

  public subscriber!: Subscription;
  
  constructor(private tokenService: TokenService, private router: Router) {
    
  
   }

  ngOnInit(): void {
  
    let typed = new Typed('.typed', {
      strings: [
        '#YoProgramo',
      ],
      //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      //smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      //shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      //loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato
    });
  
    this.subscriber = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
        this.nombreUsuario = this.tokenService.getUserName();
      } else {
        this.isLogged = false;
        this.nombreUsuario = '';
      }
    });


    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }

 

  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }


}
