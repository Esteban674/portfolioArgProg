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

 //EXPERIENCIAS
 getExperience(): Observable<Experience[]>{
  return this.http.get<Experience[]>(`${this.apiUrlL}/experiencia`);
 }

 getExperiencePorId(id: string): Observable<Experience>{
  return this.http.get<Experience>(`${this.apiUrlL}/experiencia/${id}`);
 }
 
 addExperience(experience:Experience): Observable<Experience>{
   return this.http.post<Experience>(`${this.apiUrlL}/experiencia/agregar`, experience)
 }

 updateExperience(experience:Experience): Observable<Experience>{
   return this.http.put<Experience>(`${this.apiUrlL}/experiencia/editar/${experience.id}`, experience)
 }

 deleteExperience(id: number): Observable<Experience>{
  return this.http.delete<Experience>(`${this.apiUrlL}/experiencia/eliminar/${id}`);
 }

 //EDUCACION
 getEducation(): Observable<Education[]>{
  return this.http.get<Education[]>(`${this.apiUrlL}/educacion`);
 }

 getEducationPorId(id: string): Observable<Education>{
  return this.http.get<Education>(`${this.apiUrlL}/educacion/${id}`);
 }

 addEducation(education:Education): Observable<Education>{
  return this.http.post<Education>(`${this.apiUrlL}/educacion/agregar`, education)
}

updateEducation(education:Education): Observable<Education>{
  return this.http.put<Education>(`${this.apiUrlL}/educacion/editar/${education.id}`, education)
}

deleteEducation(id: number): Observable<Education>{
 return this.http.delete<Education>(`${this.apiUrlL}/educacion/eliminar/${id}`);
}

//CURSOS
 getCursos(): Observable<CoursesCertified[]>{
   return this.http.get<CoursesCertified[]>(`${this.apiUrlL}/coursesCertified`);
 }

}
