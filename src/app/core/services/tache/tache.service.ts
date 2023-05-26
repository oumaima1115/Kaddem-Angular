import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tache } from '../../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private apiServerUrl= environment.apiBaseUrl
  //http://localhost:8085/kaddem

  constructor(private http: HttpClient) { }

  public retrieveAllTaches():Observable<Tache[]>{
    return this.http.get<Tache[]>(`${this.apiServerUrl}/api/Tache`)
  }

  public addTache(tache:Tache):Observable<Tache>{
    return this.http.post<Tache>(`${this.apiServerUrl}/api/addTache`, tache);
  }
  
  public deleteTache(idTache:number|undefined):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeTache/${idTache}`);
  }

  public updateTache(tache:Tache,idTache:Number):Observable<Tache>{
    return this.http.put<Tache>(`${this.apiServerUrl}/api/updateTache/${idTache}`,tache);
  }
  
  public removeAllTache():Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeAllTache`);
  }
  
  public getTacheByProjetId(idProjet:number):Observable<Tache[]>{
    return this.http.get<Tache[]>(`${this.apiServerUrl}/api/getTacheByProjetId`)
  }

}
