import { Component, Input, OnInit } from '@angular/core';
import { Universite } from 'src/app/core/models/Universite';

@Component({
  selector: 'app-universite-detail',
  templateUrl: './universite-detail.component.html',
  styleUrls: ['./universite-detail.component.css']
})
export class UniversiteDetailComponent implements OnInit {
 
  constructor() { }
   //@Input() idUniversiteF !: number;
   @Input() univChild !: Universite;
  ngOnInit(): void {
  }

}
