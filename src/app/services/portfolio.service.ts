import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private apiUrl = 'http://localhost:5000'
  constructor(private http: HttpClient) { }

 getUser(): Observable<User>{
  return this.http.get<User>(this.apiUrl + '/user');
 }

 getExperience(): Observable<Experience[]>{
  return this.http.get<Experience[]>(this.apiUrl + '/experience');
 }

}
