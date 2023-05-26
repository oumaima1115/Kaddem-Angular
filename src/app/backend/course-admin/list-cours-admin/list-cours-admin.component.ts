import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cours } from 'src/app/core/models/Cours';
import { Universite } from 'src/app/core/models/Universite';
import { CoursService } from 'src/app/core/services/cours/cours.service';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-list-cours-admin',
  templateUrl: './list-cours-admin.component.html',
  styleUrls: ['./list-cours-admin.component.css']
})
export class ListCoursAdminComponent implements OnInit {

  constructor(private coursService: CoursService,private universiteService: UniversiteService) { }
  public courses: Cours[]=[];
  public editCourse !: Cours|null;
  public deleteCours !: Cours|null;
  public categories:String[]=["test","test2"];
  public universitiesFront:Universite[]=[];


  ngOnInit(): void {
    this.ListCourses();
    this.ListeUniversites();
  }
  ListeUniversites(){
    this.universiteService.getUniversities().subscribe(data=>this.universitiesFront=data);
  }
 ListCourses(){
  this.coursService.getCourses().subscribe(data =>this.courses=data);
 }
 onUpdateCourse(cours:Cours){
  this.coursService.updateCourse(cours).subscribe(()=>this.ListCourses());
  console.log(cours);
 }
 onAddCourse(addForm: NgForm){
  document.getElementById('add-course-form')?.click();
  this.coursService.addCourse(addForm.value).subscribe(()=>this.ListCourses());
  console.log(addForm.value);
 }
 onAddCourseUniv(addForm: NgForm,nomUniv:string){
  document.getElementById('add-course-form')?.click();
  this.coursService.addCourseUniv(addForm.value,nomUniv).subscribe(()=>this.ListCourses());
  console.log(addForm.value,nomUniv);
  console.log(nomUniv);

 }
 onRemoveCourse(idCours : number){
  this.coursService.deleteCourse(idCours).subscribe(()=>this.ListCourses());
 }
 onOpenModal(cours:Cours|null,mode: string){
  const container=document.getElementById('main-post');
  const button=document.createElement('button');
  button.type='button';
  button.style.display='none';
  button.setAttribute('data-toggle','modal');
  if(mode == 'add'){
    button.setAttribute('data-target','#addCourseModal');
  }
  if(mode == 'edit'){
    this.editCourse=cours;
    button.setAttribute('data-target','#editCourseModal');
  }
  if(mode == 'delete'){
    this.deleteCours=cours;
    button.setAttribute('data-target','#deleteCourseModal');
  }
  container?.appendChild(button);
  button.click();

 }
 name(nom:string){
  console.log(nom);
 }
 OnAscClick(){
  this.coursService.orderCourseAsc().subscribe(data => this.courses=data);
 }
 OnDescClick(){
  this.coursService.orderCourseDesc().subscribe(data => this.courses=data);
 }


}
