import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Equipe } from 'src/app/core/models/equipe.model';
import { EquipeService } from 'src/app/core/services/equipe/equipe.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  equipe:Equipe[]=[];
  editEquipe!: Equipe | null;
  deleteEquipe!:Equipe | null;
  searchText:any;
  page:number=1
  count:number=0
  tableSize:number=5
  tableSizes:any = [5 , 10, 15, 20]
  imgURL:any
  imagePath:any
  message!:string

  constructor(private service:EquipeService) { }

  ngOnInit(): void {
    this.getEquipes()
  }

  getEquipes(){
    this.service.retrieveAllEquipe().subscribe(
      (data:Equipe[]) =>{ 
        this.equipe = data
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
  
  onTableDataChange(event:any):void{
    this.page = event
    this.getEquipes()
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1
    this.getEquipes()
  }
  removeAllEquipe(){
    this.service.removeAllEquipe().subscribe(() =>this.getEquipes())
  }

  onRemoveEquipe(idEquipe:number|undefined){
    this.service.deleteEquipe(idEquipe).subscribe(() =>this.getEquipes())
  }
  
  onAddEquipe(addForm: NgForm){
    document.getElementById('add-equipe-form')?.click();
    var equipe:Equipe={
      idEquipe:0,
      nomEquipe: addForm.form.value.nomEquipe,
      niveau: addForm.form.value.niveau,
      logo: addForm.form.value.logo,
      nbrMax: addForm.form.value.nbrMax,
      nbrParticipant: addForm.form.value.nbrParticipant,
      ratting: addForm.form.value.ratting
    }
    this.service.addEquipe(equipe).subscribe((res) => {this.getEquipes();
    });  
    addForm.reset()
  }

  onUpdateEquipe(editForm:NgForm){
    var equipe:Equipe={
      idEquipe:editForm.form.value.idEquipe,
      nomEquipe: editForm.form.value.nomEquipe,
      niveau: editForm.form.value.niveau,
      logo: editForm.form.value.logo,
      nbrMax: editForm.form.value.nbrMax,
      nbrParticipant: editForm.form.value.nbrParticipant,
      ratting: editForm.form.value.ratting
    }
    this.service.updateEquipe(equipe,equipe.idEquipe).subscribe(() => this.getEquipes()); 
  }

  onOpenModal(equipe: Equipe|null, mode: string): void {
    const container = document.getElementById('main-post');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEquipeModal');
    }
    if (mode === 'edit') {
      this.editEquipe = equipe;
      button.setAttribute('data-target', '#editEquipeModal');
    }
    if (mode === 'delete') {
      this.deleteEquipe= equipe;
      button.setAttribute('data-target', '#deleteEquipeModal');
    }
    if (mode === 'removeAll') {
      button.setAttribute('data-target', '#deleteAllEquipeModal');
    }
    container?.appendChild(button);
    button.click();

  }
}