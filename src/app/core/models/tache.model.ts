export class Tache{
    idTache!:number;
    nomTache!: string;
    descriptionTache!: string;
    etat!: "TODO"|"INPROGRESS"|"CODEREVIEW"|"DONE";
    type!: "STORY"|"TASK"|"BUG"|"EPIC";
    created!: Date;
    updated!: Date;
}