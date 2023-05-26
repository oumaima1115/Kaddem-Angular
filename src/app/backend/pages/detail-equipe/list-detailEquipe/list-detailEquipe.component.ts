import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DetailEquipe } from 'src/app/core/models/detailEquipe.model';
import { DetailEquipeService } from 'src/app/core/services/detailEquipe/detail-equipe.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-detail-equipe',
  templateUrl: './list-detailEquipe.component.html',
  styleUrls: ['./list-detailEquipe.component.css']
})
export class ListDetailEquipeComponent implements OnInit {

  detailEquipe:DetailEquipe[]=[];
  editDetailEquipe!: DetailEquipe | null;
  deleteDetailEquipe!:DetailEquipe | null;
  searchText:any;
  page:number=1
  count:number=0
  tableSize:number=5
  tableSizes:any = [5 , 10, 15, 20]
  imgURL:any
  imagePath:any
  message!:string

  constructor(private service:DetailEquipeService) { }

  ngOnInit(): void {
    this.getDetailEquipes()
  }

  getDetailEquipes(){
    this.service.retrieveAllDetailEquipe().subscribe(
      (data:DetailEquipe[]) =>{ 
        this.detailEquipe= data 
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }
  
  onTableDataChange(event:any):void{
    this.page = event
    this.getDetailEquipes()
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1
    this.getDetailEquipes()
  }
  removeAllDetailEquipe(){
    this.service.removeAllDetailEquipe().subscribe(() =>this.getDetailEquipes())
  }

  onRemoveDetailEquipe(idDetailEquipe:number|undefined){
    this.service.deleteDetailEquipe(idDetailEquipe).subscribe(() =>this.getDetailEquipes())
  }
  
  onAddDetailEquipe(addForm: NgForm){
    document.getElementById('add-detailEquipe-form')?.click();
    var detailEquipe:DetailEquipe={
      idDetailEquipe:0,
      salle: addForm.form.value.salle,
      bloc: addForm.form.value.bloc,
      etage: addForm.form.value.etage,
      thematique: addForm.form.value.thematique,
    }
    this.service.addDetailEquipe(detailEquipe).subscribe((res) => {this.getDetailEquipes();
    });  
    addForm.reset()
  }

  onUpdateDetailEquipe(editForm:NgForm){
    var detailEquipe:DetailEquipe={
      idDetailEquipe:editForm.form.value.idDetailEquipe,
      salle: editForm.form.value.salle,
      bloc: editForm.form.value.bloc,
      etage: editForm.form.value.etage,
      thematique: editForm.form.value.thematique,
    }
    this.service.updateDetailEquipe(detailEquipe,detailEquipe.idDetailEquipe).subscribe(() => this.getDetailEquipes()); 
  }

  onOpenModal(detailEquipe: DetailEquipe|null, mode: string): void {
    const container = document.getElementById('main-post');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDetailEquipeModal');
    }
    if (mode === 'edit') {
      this.editDetailEquipe = detailEquipe;
      button.setAttribute('data-target', '#editDetailEquipeModal');
    }
    if (mode === 'delete') {
      this.deleteDetailEquipe= detailEquipe;
      button.setAttribute('data-target', '#deleteDetailEquipeModal');
    }
    if (mode === 'removeAll') {
      button.setAttribute('data-target', '#deleteAllDetailEquipeModal');
    }
    container?.appendChild(button);
    button.click();

  }
}