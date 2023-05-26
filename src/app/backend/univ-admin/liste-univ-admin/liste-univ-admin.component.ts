import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { error } from 'console';
import { Universite } from 'src/app/core/models/Universite';
import { UniversiteService } from 'src/app/core/services/universite.service';

@Component({
  selector: 'app-liste-univ-admin',
  templateUrl: './liste-univ-admin.component.html',
  styleUrls: ['./liste-univ-admin.component.css']
})
export class ListeUnivAdminComponent implements OnInit {

  constructor(private universiteService : UniversiteService) { }
  public universities:Universite[]=[];
  public editUniv !: Universite|null;
  public deleteUniv !: Universite|null;
  searchText: any;

  ngOnInit(): void {
    this.getUniversitiesList();
  }
  getUniversitiesList(){
    this.universiteService.getUniversities().subscribe(data=>this.universities=data);
  }
  onUpdateUniv(univ:Universite){
    this.universiteService.updateUniversity(univ).subscribe(() => this.getUniversitiesList());
    console.log(univ);
  }
  onRemoveUniv(idUniv:number){
    this.universiteService.deleteUniversity(idUniv).subscribe(() =>this.getUniversitiesList());
   
  }
  onAddUniv(addForm: NgForm){
  
    document.getElementById('add-univ-form')?.click();
    this.universiteService.addUniversity(addForm.value).subscribe(
      () => this.getUniversitiesList());   
  }
  onOpenModal(univ: Universite|null, mode: string): void {
    const container = document.getElementById('main-post');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUnivModal');
    }
    if (mode === 'edit') {
      this.editUniv = univ;
      button.setAttribute('data-target', '#updateUnivModal');
    }
    if (mode === 'delete') {
      this.deleteUniv = univ;
      button.setAttribute('data-target', '#deleteUnivModal');
    }
    container?.appendChild(button);
    button.click();
  }
  exportUniversityPdf(){
    this.universiteService.exportUnivPDF().subscribe(x => {
      const blob =new Blob([x], {type: 'application/pdf'});
      const nav= (window.navigator as any);
      if(nav && nav.msSaveOrOpenBlob   ){
        nav.msSaveOrOpenBlob(blob)
        return ;
      }
      const data =window.URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=data;
      link.download='universities.pdf';
      link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
      setTimeout(function(){
        window.URL.revokeObjectURL(data);
        link.remove();
      },100)

    });
  }

}
