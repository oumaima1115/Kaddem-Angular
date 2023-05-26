import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/models/equipe.model';
import { EquipeService } from 'src/app/core/services/equipe/equipe.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-equipe-front',
  templateUrl: './list-equipe-front.component.html',
  styleUrls: ['./list-equipe-front.component.css']
})
export class ListEquipeFrontComponent implements OnInit {

  equipes!:Equipe[]
  equipe!:Equipe
  textEquipe="Team"
  showComponent=false;

  constructor(private service:EquipeService) { }

  ngOnInit(): void {
    this.getEquipes()
  }

  getEquipes(){
    this.service.retrieveAllEquipe().subscribe(
      (data:Equipe[]) =>{ 
        this.equipes = data
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
  onClickName(equipe:Equipe){
    this.showComponent=true;
    this.equipe = equipe;
  }
}