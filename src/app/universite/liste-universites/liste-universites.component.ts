import { Component, Input, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/models/Universite';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-liste-universites',
  templateUrl: './liste-universites.component.html',
  styleUrls: ['./liste-universites.component.css']
})
export class ListeUniversitesComponent implements OnInit {

  constructor(private universiteService : UniversiteService) { }
  textUniv="Universities";
  public universitiesFront:Universite[]=[];
  public universitiesCategorie:Universite[]=[]
  public univDetail !: Universite;
  showComponent=false;
  text1="Private";
  text2="Public";
  classAll ="";
  classPublic="";
  classPrivate=""
  
  
  ngOnInit(): void {
    this.getUniversitiesList();
  }
  getUniversitiesList(){
    this.universiteService.getUniversities().subscribe(data=>this.universitiesFront=data);
    this.showComponent=false;
    this.classAll="active";
    this.classPublic="";
    this.classPrivate="";

  }
  getUniversitiesByCat(categorie:string){
    this.universiteService.findUniversityByCategorie(categorie).subscribe(data=>this.universitiesFront=data);
    this.showComponent=false
    this.classAll=""
    if(categorie==this.text1){
      this.classPrivate="active";
      this.classPublic="";

    }
    if(categorie==this.text2){
      this.classPublic="active";
      this.classPrivate="";
    }
    
   
  }
  onClickName(univ:Universite){
    this.showComponent=true;
    console.log(univ);
    this.univDetail=univ;
    console.log(this.univDetail);
    console.log(this.univDetail.idUniv);

  }

}
