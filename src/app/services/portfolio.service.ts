import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CoursesCertified, Education, Experience, User } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 
'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  private apiUrlL: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

 getUser(): Observable<User>{
  return this.http.get<User>(`${this.apiUrlL}/user`);
 }

 getExperience(): Observable<Experience[]>{
  return this.http.get<Experience[]>(`${this.apiUrlL}/experience`);
 }
 
 addExperience(experience:Experience): Observable<Experience>{
   return this.http.post<Experience>(`${this.apiUrlL}/experience`, experience)
 }

 updateExperience(experience:Experience): Observable<Experience>{
   return this.http.put<Experience>(`${this.apiUrlL}/experience/${experience.id}`, experience)
 }


 getEducation(): Observable<Education[]>{
  return this.http.get<Education[]>(`${this.apiUrlL}/education`);
 }

 getCursos(): Observable<CoursesCertified[]>{
   return this.http.get<CoursesCertified[]>(`${this.apiUrlL}/coursesCertified`);
 }

}
