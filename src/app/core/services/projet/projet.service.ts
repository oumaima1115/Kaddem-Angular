import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projet } from '../../models/projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  private apiServerUrl= environment.apiBaseUrl
  //http://localhost:8085/kaddem

  constructor(private http: HttpClient) { }

  public retrieveAllProjet():Observable<Projet[]>{
    return this.http.get<Projet[]>(`${this.apiServerUrl}/api/Projet`)
  }

  public addProjet(projet:Projet):Observable<Projet>{
    return this.http.post<Projet>(`${this.apiServerUrl}/api/addProjet`, projet);
  }
  
  public deleteProjet(idProjet:number|undefined):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeProjet/${idProjet}`);
  }

  public updateProjet(projet:Projet,idProjet:Number):Observable<Projet>{
    return this.http.put<Projet>(`${this.apiServerUrl}/api/updateProjet/${idProjet}`,projet);
  }
  
  public removeAllProjet():Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeAllProjet`);
  }

  public pdf():Observable<Blob>{
    return this.http.get(`${this.apiServerUrl}/api/exportProjet/pdf`, {responseType: 'blob'})
  }

  public excel():Observable<Blob>{
    return this.http.get(`${this.apiServerUrl}/api/exportProjet/excel`, {responseType: 'blob'})
  }
}
