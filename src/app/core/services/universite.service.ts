import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Universite } from '../models/Universite';


@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }
 

  getUniversities(){
    return this.http.get<Universite[]>(`${this.apiServerUrl}/universite/all`);
  }
  deleteUniversity(idUniv:Number){
    return this.http.delete(`${this.apiServerUrl}/universite/delete/${idUniv}`);
  }
  updateUniversity(univ:Universite){
    return this.http.put<Universite>(`${this.apiServerUrl}/universite/update`, univ);
  }
  addUniversity(univ:Universite){
    return this.http.post<Universite>(`${this.apiServerUrl}/universite/add`, univ)
  }
  findUniversityByCategorie(categorie:string){
    return this.http.get<Universite[]>(`${this.apiServerUrl}/universite/findByCategorie/${categorie}`)
  }
  exportUnivPDF(): Observable<Blob>{
    return this.http.get(`${this.apiServerUrl}/universite/export/pdf`,{responseType:'blob'});
  }
  
 
}
