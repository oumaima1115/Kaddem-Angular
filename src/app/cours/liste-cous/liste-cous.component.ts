import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/core/models/Cours';
import { CoursService } from 'src/app/core/services/cours/cours.service';

@Component({
  selector: 'app-liste-cous',
  templateUrl: './liste-cous.component.html',
  styleUrls: ['./liste-cous.component.css']
})
export class ListeCousComponent implements OnInit {

  constructor(private coursService: CoursService) { }
  public coursesFront:Cours[]=[];
  textCourse="Courses";
  text1="development";
  text2="IA";
  text3="BI";
  text4="DS";
  text5="CLOUD";
  classDev="";
  classIA="";
  classBI="";
  classDS="";
  classCLOUD="";
  classALL="";

  ngOnInit(): void {
    this.ListeCourses();
  }
  ListeCourses(){
    this.coursService.getCourses().subscribe(data=>this.coursesFront=data);
    this.classALL="active";
    this.classBI="";
    this.classCLOUD="";
    this.classDS="";
    this.classDev="";
    this.classIA=""
  }
  ListeCoursesByCat(cat:string){
    this.coursService.findCoursesByCategorie(cat).subscribe(data=>this.coursesFront=data);
    this.classALL="";
    if(cat==this.text3){
       this.classBI="active";
       this.classCLOUD="";
       this.classDS="";
       this.classDev="";
       this.classIA="";
    }
    if(cat==this.text5){
      this.classBI="";
       this.classCLOUD="active";
       this.classDS="";
       this.classDev="";
       this.classIA="";
    }
    if(cat==this.text4){
      this.classBI="";
       this.classCLOUD="";
       this.classDS="active";
       this.classDev="";
       this.classIA="";
    }
    if(cat==this.text1){
      this.classBI="";
       this.classCLOUD="";
       this.classDS="";
       this.classDev="active";
       this.classIA="";
    }
    if(cat==this.text2){
      this.classBI="";
       this.classCLOUD="";
       this.classDS="";
       this.classDev="";
       this.classIA="active";
    }
   }
   OnAscClick(){
    this.coursService.orderCourseAsc().subscribe(data => this.coursesFront=data);
   }
   OnDescClick(){
    this.coursService.orderCourseDesc().subscribe(data => this.coursesFront=data);
   }

}
