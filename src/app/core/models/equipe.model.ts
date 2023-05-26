export class Equipe{
    idEquipe!:number;
    nomEquipe!: string;
    niveau!: "JUNIOR" | "SENIOR" | "EXPERT";
    logo!: string;
    nbrMax!:number;
    nbrParticipant!: number;
    ratting!: 1|2|3|4|5;
}