import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cours } from '../../models/Cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http : HttpClient) { }
  getCourses(){
    return this.http.get<Cours[]>(`${this.apiServerUrl}/cours/all`);
  }
  deleteCourse(idCours: number){
    return this.http.delete(`${this.apiServerUrl}/cours/remove/${idCours}`);

  }
  updateCourse(cours : Cours){
    return this.http.put<Cours>(`${this.apiServerUrl}/cours/update`,cours);

  }
  addCourse(cours:Cours){
    return this.http.post<Cours>(`${this.apiServerUrl}/cours/add`,cours);
  }
  findCourseById(idCours:number){
    return this.http.get<Cours>(`${this.apiServerUrl}/cours/find/${idCours}`);
  }
  addCourseUniv(cours:Cours,nomUniv:string){
    return this.http.post<Cours>(`${this.apiServerUrl}/cours/addCourseUniv/${nomUniv}`, cours)
  }
  findCoursesByCategorie(cat:String|null){
    return this.http.get<Cours[]>(`${this.apiServerUrl}/cours/findByCategorie/${cat}`);
  }
  orderCourseAsc(){
    return this.http.get<Cours[]>(`${this.apiServerUrl}/cours/listAsc`);
  }
  orderCourseDesc(){
    return this.http.get<Cours[]>(`${this.apiServerUrl}/cours/listADesc`);
  }

}
