import { Byte } from "@angular/compiler/src/util";

export class Projet{
    idProjet!:number;
    nomProjet!: string;
    descriptionProjet!: string;
    prixProjet!: number;
    dateDebutProjet!: Date;
    dateFinProjet!: Date;
    logo!: string;
    slogan!:string;    
    methodologie!:string;
    ratting!: 1|2|3|4|5;
}