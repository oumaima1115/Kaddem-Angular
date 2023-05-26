import { Component, Input, OnInit } from '@angular/core';
import { DetailEquipe } from 'src/app/core/models/detailEquipe.model';
import { Equipe } from 'src/app/core/models/equipe.model';
import { DetailEquipeService } from 'src/app/core/services/detailEquipe/detail-equipe.service';
import { TacheService } from 'src/app/core/services/tache/tache.service';

@Component({
  selector: 'app-list-detail-equipe-front',
  templateUrl: './list-detail-equipe-front.component.html',
  styleUrls: ['./list-detail-equipe-front.component.css']
})
export class ListDetailEquipeFrontComponent implements OnInit {

  
  @Input() equipeChild !: Equipe;
  detailEquipe!: DetailEquipe
  constructor(private service:DetailEquipeService) {}

  ngOnInit(): void {
    this.service.getDetailEquipeByEquipeId(this.equipeChild.idEquipe).subscribe(data => {
      this.detailEquipe = {
        idDetailEquipe:data.idDetailEquipe,
        salle:data.salle,
        bloc:data.bloc,
        etage:data.etage,
        thematique:data.thematique
      }
      console.log("her",this.detailEquipe)
      console.log("her",this.equipeChild)
    })
  }
}