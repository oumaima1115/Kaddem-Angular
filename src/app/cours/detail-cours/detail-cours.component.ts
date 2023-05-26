import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cours } from 'src/app/core/models/Cours';
import { CoursService } from 'src/app/core/services/cours/cours.service';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css']
})
export class DetailCoursComponent implements OnInit {

  constructor(private serviceCours:CoursService,private activatedRouter: ActivatedRoute) { }
  idC!:number;
  idCours !: any;
  nomCours !: string|null;
  nomEnseignant !: string|null ;
  descriptionCours !: string|null ;
  dateDePublication !: String|null;
  prixCours !: string|null ;
  flyer !: string|null;
  categorieCours !: string|null;
 
  public coursesSameCat:Cours[]=[];

  ngOnInit(): void {
    this.activatedRouter.queryParamMap.subscribe(params=>{
      this.idCours=params.get('id'),
      this.nomCours=params.get('name'),
      this.nomEnseignant=params.get('teacher'),
      this.dateDePublication=params.get('date'),
      this.descriptionCours=params.get('description'),
      this.prixCours=params.get('price'),
      this.flyer=params.get('image'),
      this.categorieCours=params.get('categorie');
    })
    console.log(this.idCours,this.nomCours,this.dateDePublication,this.descriptionCours,this.flyer,this.nomEnseignant,this.prixCours,this.categorieCours);

    //this.activatedRouter.paramMap.subscribe(data=>this.idC=Number(data.get('param')));
    //this.serviceCours.findCourseById(this.idC).subscribe(data=>this.cours=data);
    //console.log(this.idC);
    //console.log(this.cours);
    // this.getCourseById(this.idC);
    this.ListeCoursesByCat(this.categorieCours);
 
  }
  ListeCoursesByCat(cat:string|null){
    this.serviceCours.findCoursesByCategorie(cat).subscribe(data=>this.coursesSameCat=data);
  }
 /*  getCourseById(id:number){
    this.serviceCours.findCourseById(id).subscribe(data=>this.cours=data);
  }*/

}
