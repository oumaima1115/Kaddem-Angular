import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetailEquipe } from '../../models/detailEquipe.model';

@Injectable({
  providedIn: 'root'
})
export class DetailEquipeService {

  private apiServerUrl= environment.apiBaseUrl
  //http://localhost:8085/kaddem

  constructor(private http: HttpClient) { }

  public retrieveAllDetailEquipe():Observable<DetailEquipe[]>{
    return this.http.get<DetailEquipe[]>(`${this.apiServerUrl}/api/DetailEquipe`)
  }

  public addDetailEquipe(detailEquipe:DetailEquipe):Observable<DetailEquipe>{
    return this.http.post<DetailEquipe>(`${this.apiServerUrl}/api/addDetailEquipe`, detailEquipe);
  }
  
  public deleteDetailEquipe(idDetailEquipe:number|undefined):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeDetailEquipe/${idDetailEquipe}`);
  }
  
  public updateDetailEquipe(detailEquipe:DetailEquipe,idDetailEquipe:Number):Observable<DetailEquipe>{
    return this.http.put<DetailEquipe>(`${this.apiServerUrl}/api/updateDetailEquipe/${idDetailEquipe}`,detailEquipe);
  }
  
  public removeAllDetailEquipe():Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/removeAllDetailEquipe`);
  }

  public getDetailEquipeByEquipeId(idEquipe:number):Observable<DetailEquipe>{
    return this.http.get<DetailEquipe>(`${this.apiServerUrl}/api/getDetailEquipeByEquipeId/${idEquipe}`);
  }
}
