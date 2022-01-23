import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoursesCertified, Education, Experience, User } from '../interfaces/interfaces';

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

 getEducation(): Observable<Education[]>{
  return this.http.get<Education[]>(this.apiUrl + '/education');
 }

 getCursos(): Observable<CoursesCertified[]>{
   return this.http.get<CoursesCertified[]>(this.apiUrl + '/coursesCertified');
 }

}
