import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/core/models/projet.model';
import { ProjetService } from 'src/app/core/services/projet/projet.service';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-projet',
  templateUrl: './list-projet.component.html',
  styleUrls: ['./list-projet.component.css']
})
export class ListProjetComponent implements OnInit {

  projet:Projet[]=[];
  editProjet!: Projet | null;
  deleteProjet!:Projet | null;
  searchText:any;
  page:number=1
  count:number=0
  tableSize:number=5
  tableSizes:any = [5 , 10, 15, 20]
  imgURL:any
  imagePath:any
  message!:string

  constructor(private service:ProjetService) { }

  ngOnInit(): void {
    this.getProjets()
  }

  getProjets(){
    this.service.retrieveAllProjet().subscribe(
      (data:Projet[]) =>{ 
        this.projet = data
      },
      (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    )
  }

  pdf(){
    this.service.pdf().subscribe((x) =>{
      const blob =new Blob([x], {type: 'application/pdf'});
      const nav= (window.navigator as any);
      if(nav && nav.msSaveOrOpenBlob   ){
        nav.msSaveOrOpenBlob(blob)
        return ;
      }
      const data =window.URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=data;
      link.download='Projects.pdf';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data);
        link.remove();
      },100)
    })
  }
  
  excel(){
    this.service.excel().subscribe((x)=>{
      
      const blob =new Blob([x], {type: 'application/cnd.ms-excel'});
      const nav= (window.navigator as any);
      if(nav && nav.msSaveOrOpenBlob   ){
        nav.msSaveOrOpenBlob(blob)
        return ;
      }
      const data =window.URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=data;
      link.download='Projects.xlsx';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data);
        link.remove();
      },100)
    })
  }

  onTableDataChange(event:any):void{
    this.page = event
    this.getProjets()
  }

  onTableSizeChange(event:any):void{
    this.tableSize = event.target.value;
    this.page = 1
    this.getProjets()
  }
  removeAllProjet(){
    this.service.removeAllProjet().subscribe(() =>this.getProjets())
  }

  onRemoveProjet(idProjet:number|undefined){
    this.service.deleteProjet(idProjet).subscribe(() =>this.getProjets())
  }
  
  onAddProjet(addForm: NgForm){
    document.getElementById('add-projet-form')?.click();
    var projet:Projet={
      idProjet:0,
      nomProjet: addForm.form.value.nomProjet,
      descriptionProjet: addForm.form.value.descriptionProjet,
      prixProjet: addForm.form.value.prixProjet,
      dateDebutProjet: addForm.form.value.dateDebutProjet,
      dateFinProjet: addForm.form.value.dateFinProjet,
      logo: addForm.form.value.logo,
      slogan: addForm.form.value.slogan,
      methodologie: addForm.form.value.methodologie,
      ratting: addForm.form.value.ratting
    }

    this.service.addProjet(projet).subscribe((res) => {this.getProjets();
    });  
    addForm.reset()
  }

  onUpdateProjet(editForm:NgForm){
    var projet:Projet={
      idProjet: editForm.form.value.idProjet,
      nomProjet: editForm.form.value.nomProjet,
      descriptionProjet: editForm.form.value.descriptionProjet,
      prixProjet: editForm.form.value.prixProjet,
      dateDebutProjet: editForm.form.value.dateDebutProjet,
      dateFinProjet: editForm.form.value.dateFinProjet,
      logo: editForm.form.value.logo,
      slogan: editForm.form.value.slogan,
      methodologie: editForm.form.value.methodologie,
      ratting: editForm.form.value.ratting
    }
    this.service.updateProjet(projet,projet.idProjet).subscribe(() => this.getProjets()); 
  }

  onOpenModal(projet: Projet|null, mode: string): void {
    const container = document.getElementById('main-post');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProjetModal');
    }
    if (mode === 'edit') {
      this.editProjet = projet;
      button.setAttribute('data-target', '#editProjetModal');
    }
    if (mode === 'delete') {
      this.deleteProjet = projet;
      button.setAttribute('data-target', '#deleteProjetModal');
    }
    if (mode === 'removeAll') {
      button.setAttribute('data-target', '#deleteAllProjetModal');
    }
    container?.appendChild(button);
    button.click();

  }

}
