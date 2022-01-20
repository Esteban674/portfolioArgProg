import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Usuario } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'http://localhost:5000'
  constructor(private http: HttpClient) { }

 getUsuario(): Observable<Usuario>{
  return this.http.get<Usuario>(this.apiUrl + '/usuario');
 }

}
