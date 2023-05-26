import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tache } from 'src/app/core/models/tache.model';
import { TacheService } from 'src/app/core/services/tache/tache.service';

@Component({
  selector: 'app-tache-front',
  templateUrl: './tacheFront.component.html',
  styleUrls: ['./tacheFront.component.css']
})
export class TacheFrontComponent implements OnInit {

  myId!: number
  taches!: Tache[]
  textProjet="Tache"

  constructor(private route : ActivatedRoute, private service:TacheService){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      this.myId = Number(data.get('param'));
      console.log("this.myId = "+this.myId)
      this.service.getTacheByProjetId(this.myId).subscribe((data)=>{
        this.taches = data
        console.log("here taches = ", this.taches)
      })
    })
    
    
  }


}
