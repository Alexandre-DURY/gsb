import { Component, OnInit } from '@angular/core';
import {Specialite} from '../metier/specialite';
import {PraticienNService} from '../praticien-n.service';
import {PossederService} from '../posseder.service';
import {SpecialiteService} from '../specialite.service';
import {Posseder} from '../metier/posseder';
import {PraticienN} from '../metier/praticien-n';


@Component({
  selector: 'app-praticiens-s',
  templateUrl: './praticiens-s.component.html',
  styleUrls: ['./praticiens-s.component.css']
})
export class PraticiensSComponent implements OnInit {
  nom_praticien: string;
  id_praticien: number;
  id_specialite: number;
  diplome: string;
  coef_prescription: number;
  afficherSpecialite = true;
  afficherTable = false;
  afficherMessage = false;
  afficherPraticien = false;
  afficherDetail =false;
  afficherSuppr = false;
  afficherAjout = false;
  afficherModif = false;
  lblMessage = '';

  specialite: Specialite;
  lesSpecialites: Array<Specialite>;
  posseder: Posseder;
  lesPosseder : Array<Posseder>;
  praticien : PraticienN;
  lesPraticiens : Array<PraticienN>;

  constructor(private praticienService: PraticienNService, private possederService: PossederService,private specialiteService : SpecialiteService) {
  }

  ngOnInit() {
    this.specialiteService.chargerAllSpecialites()
      .subscribe((data) => {
        this.lesSpecialites = data}, (error) => {
      });
  }
  selectionner(prat): void {
    this.praticien = prat;
    this.nom_praticien = prat.nom_praticien + ' ' + prat.prenom_praticien;
    this.id_praticien = prat.id_praticien;
    this.lesPraticiens = null;
    this.afficherPraticien = true;
    this.afficherTable = false;
    this.afficherMessage = false;
    this.afficherDetail = true;
    this.afficherSuppr = false;
    this.possederService.chargerSpecialite(this.id_praticien)
      .subscribe((data) => {this.lesPosseder = data}, (error) =>  { });
  }

  validerSpecialite():void {
this.afficherSpecialite =false;
this.afficherTable =true;
this.possederService.chargerLesPraticiensParSpecialite(this.id_specialite)
  .subscribe((data) => {
  this.lesPraticiens = data}, (error) => {
});
  }
  modifier(poss): void {
    this.afficherModif = true;
    this.posseder = poss;
    this.id_praticien = poss.id_praticien;
    this.id_specialite = poss.id_specialite;
    this.diplome = poss.diplome;
    this.coef_prescription = poss.coef_prescription;
    this.afficherPraticien = false;
    this.afficherTable = false;
    this.afficherMessage = false;
    this.afficherDetail = false;
    this.afficherSuppr = false;
  }
  supprimer(poss): void {
    this.afficherSuppr = true;
    this.posseder = poss;
    this.id_praticien = poss.id_praticien;
    this.id_specialite = poss.id_specialite;
    this.afficherPraticien = false;
    this.afficherTable = false;
    this.afficherMessage = false;
    this.afficherDetail = true;
  }
  valider(poss): void {
    this.posseder = poss;
    this.id_praticien = poss.id_praticien;
    this.id_specialite = poss.id_specialite;
    this.diplome = poss.diplome;
    this.coef_prescription = poss.coef_prescription;
    this.afficherMessage = true;
    this.possederService.modifier(this.posseder)
      .then(
        (data) => { this.lblMessage = 'Modification effectué'; },
        (error) => { this.lblMessage = 'Merci de réessayer plus tard'; });
  }
  validerSuppr(poss): void {
    this.posseder = poss;
    this.id_praticien = poss.id_praticien;
    this.id_specialite = poss.id_specialite;
    this.afficherMessage = true;
    this.possederService.supprimer(this.id_praticien,this.id_specialite)
      .subscribe(
        (data) => { this.lblMessage = 'Suppression effectué'; },
        (error) => { this.lblMessage = 'Merci de réessayer plus tard'; });
  }
  ajouter(): void {
    this.afficherSuppr = false;
    this.afficherPraticien = true;
    this.afficherTable = false;
    this.afficherMessage = false;
    this.afficherDetail = false;
    this.afficherAjout = true;
    this.specialiteService.chargerAllSpecialites()
      .subscribe((data) => {this.lesSpecialites = data}, (error) =>  { });
  }
  validerAjout(): void {
    this.afficherMessage = true;
    this.possederService.ajouter(this.posseder)
      .subscribe(
        (data) => { this.lblMessage = 'Ajout effectué'; },
        (error) => { this.lblMessage = 'Merci de réessayer plus tard'; });
  }
}

