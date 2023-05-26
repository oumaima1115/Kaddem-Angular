import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/core/models/projet.model';
import { ProjetService } from 'src/app/core/services/projet/projet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-projet-front',
  templateUrl: './list-projet-front.component.html',
  styleUrls: ['./list-projet-front.component.css']
})
export class ListProjetFrontComponent implements OnInit {

  projet!:Projet[]
  project!:Projet
  textProjet="Project"
  showComponent=false;

  constructor(private service:ProjetService) { }

  ngOnInit(): void {
    this.getProjets()
  }

  getProjets(){
    this.service.retrieveAllProjet().subscribe(
      (data:Projet[]) =>{ 
        this.projet = data
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
}
