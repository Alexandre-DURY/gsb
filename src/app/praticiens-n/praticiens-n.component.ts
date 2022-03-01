import { Component, OnInit } from '@angular/core';
// à commenter
import { PraticienNService } from '../praticien-n.service';

import { PossederService } from '../posseder.service';
// à commenter
import { PraticienN } from '../metier/praticien-n';
// à commenter
import { Posseder } from '../metier/posseder';

import { SpecialiteService } from '../specialite.service';
import { Specialite } from '../metier/specialite';

@Component({
  selector: 'app-praticiens-n',
  templateUrl: './praticiens-n.component.html',
  styleUrls: ['./praticiens-n.component.css']
})
export class PraticiensNComponent implements OnInit {
  nom_praticien: string;
  id_praticien : number;
  id_specialite : number;
  diplome : string;
  coef_prescription: number;
  afficherModif = false;
  afficherSuppr = false;
  afficherDetail = false;
  afficherSpecialite = false;
  // à commenter
  afficherTable = true;
  // à commenter
  afficherPraticien = false;
  // à commenter
  afficherMessage = false;
  lblMessage = '';

  praticien: PraticienN;
  lesPraticiens: Array<PraticienN>;

  posseder: Posseder;
  lesPosseder : Array<Posseder>;

  specialite : Specialite;
  lesSpecialites : Array<Specialite>;

  // à commenter
  constructor(private praticienService: PraticienNService, private possederService: PossederService,private specialiteService : SpecialiteService) { }
  ngOnInit() {
  }
  // à commenter
  charger(): void {
    this.afficherModif = false;
    this.afficherDetail = false;
    this.afficherPraticien = false;
    this.afficherTable = true;
    this.afficherSuppr = false;
    this.afficherSpecialite = false;
    this.praticienService.chargerPraticiens(this.nom_praticien)
      .subscribe((data) => { this.lesPraticiens = data; }, (error) => { });
  }
  chargerSpecialite():void{
    this.specialiteService.chargerAllSpecialites()
      .subscribe((data) => { this.lesSpecialites = data; }, (error) => { });
  }
  // à commenter
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
  ajouter(): void {
    this.afficherSuppr = false;
    this.afficherPraticien = true;
    this.afficherTable = false;
    this.afficherMessage = true;
    this.afficherDetail = false;
    this.afficherSpecialite = true;
    this.specialiteService.chargerAllSpecialites()
      .subscribe((data) => {this.lesSpecialites = data}, (error) =>  { });
  }
  // à commenter
  majPraticien(): void {
    this.afficherPraticien = true;
    this.afficherTable = false;
  }
  // à commenter
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
  validerAjout(poss): void {
    this.posseder = poss;
    this.id_praticien = poss.id_praticien;
    this.id_specialite = poss.id_specialite;
    this.coef_prescription = poss.coef_prescription;
    this.afficherMessage = true;
    this.possederService.ajouter(this.posseder)
      .subscribe(
        (data) => { this.lblMessage = 'Ajout effectué'; },
           (error) => { this.lblMessage = 'Merci de réessayer plus tard'; });
  }
}
