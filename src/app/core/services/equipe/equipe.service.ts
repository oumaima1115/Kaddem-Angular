import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipe } from '../../models/equipe.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private apiServerUrl= environment.apiBaseUrl
  //http://localhost:8085/kaddem

  constructor(private http: HttpClient) { }

  public retrieveAllEquipe():Observable<Equipe[]>{
    return this.http.get<Equipe[]>(`${this.apiServerUrl}/api/Equipe`)
  }

  public addEquipe(equipe:Equipe):Observable<Equipe>{
    return this.http.post<Equipe>(`${this.apiServerUrl}/api/addEquipe`, equipe);
  }
  
  public deleteEquipe(idEquipe:number|undefined):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeEquipe/${idEquipe}`);
  }
  
  public updateEquipe(equipe:Equipe,idEquipe:Number):Observable<Equipe>{
    return this.http.put<Equipe>(`${this.apiServerUrl}/api/updateEquipe/${idEquipe}`,equipe);
  }
  
  public removeAllEquipe():Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeAllEquipe`);
  }

}
