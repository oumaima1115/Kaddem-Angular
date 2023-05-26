import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tache } from 'src/app/core/models/tache.model';
import { TacheService } from 'src/app/core/services/tache/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './list-tache.component.html',
  styleUrls: ['./list-tache.component.css']
})
export class ListTacheComponent implements OnInit {

  name = 'Angular 6';
  tache:Tache[]=[];
  editTache!: Tache | null;
  deleteTache!:Tache |null;
  searchText:any;
  page:number=1
  count:number=0
  tableSize:number=5
  tableSizes:any = [5 , 10, 15, 20]
  constructor(private service:TacheService, private route : Router) {}

  ngOnInit(): void {
    this.getTaches()
  }

  onTableDataChange(event:any):void{
    this.page = event
    this.getTaches()
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1
    this.getTaches()
  }

  getTaches(){
    this.service.retrieveAllTaches().subscribe(
      (data:Tache[]) =>{ 
        this.tache = data
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  removeAllTache(){
    this.service.removeAllTache().subscribe(() =>this.getTaches())
  }

  onRemoveTache(idTache:number|undefined){
    this.service.deleteTache(idTache).subscribe(() =>this.getTaches())
  }
  
  onAddIssue(addForm: NgForm){
    document.getElementById('add-tache-form')?.click();
    var issue:Tache={
      idTache:0,
      nomTache: addForm.form.value.key,
      descriptionTache: addForm.form.value.summary,
      etat: addForm.form.value.status,
      type: addForm.form.value.typeTache,
      created: addForm.form.value.createdDate,
      updated: addForm.form.value.updatedDate
    }
    this.service.addTache(issue).subscribe(() => this.getTaches());  
    addForm.reset()
  }

  onUpdateTache(editForm:NgForm){
    var issue:Tache={
      idTache: editForm.form.value.idTache,
      nomTache: editForm.form.value.key,
      descriptionTache: editForm.form.value.summary,
      etat: editForm.form.value.status,
      type: editForm.form.value.typeTache,
      created: editForm.form.value.createdDate,
      updated: editForm.form.value.updatedDate
    }
    console.log("edite mode")
    console.log("here changes =", issue)
    this.service.updateTache(issue,issue.idTache).subscribe(() => this.getTaches()); 
  }

  onOpenModal(tache: Tache|null, mode: string): void {
    const container = document.getElementById('main-post');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTacheModal');
    }
    if (mode === 'edit') {
      this.editTache = tache;
      button.setAttribute('data-target', '#editTacheModal');
    }
    if (mode === 'delete') {
      this.deleteTache = tache;
      button.setAttribute('data-target', '#deleteTacheModal');
    }
    if (mode === 'removeAll') {
      button.setAttribute('data-target', '#deleteAllTacheModal');
    }
    container?.appendChild(button);
    button.click();

  }
}