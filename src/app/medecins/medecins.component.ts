import { Component, OnInit } from '@angular/core';
// à commenter
import { MedecinService } from '../medecin.service';
// à commenter
import { Medecin } from '../metier/medecin';

import { RapportService } from '../rapport.service';
// à commenter
import { Rapport } from '../metier/rapport';
@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent implements OnInit {
  nomMedecin: string;
  idMedecin : number;
  // à commenter
  afficherTable = true;
  // à commenter
  afficherMedecin = false;
  // à commenter
  afficherMessage = false;
  afficherRapport = false;
  lblMessage = '';
  
  rapport : Rapport;
  lesRapports: Array<Rapport>;

  medecin: Medecin;
  lesMedecins: Array<Medecin>;

  // à commenter
  constructor(private medecinService: MedecinService, private rapportService: RapportService) { }
  ngOnInit() {
  }
  // à commenter
  charger(): void {
    this.afficherRapport = false;
    this.afficherMedecin = false;
    this.afficherTable = true;
    this.medecinService.chargerMedecins(this.nomMedecin)
      .subscribe((data) => { this.lesMedecins = data; }, (error) => { });
      this.lesRapports = null;
  }
  // à commenter
  selectionner(med): void {
    this.medecin = med;
    this.nomMedecin = med.nom + ' ' + med.prenom + ' ; dep : ' +
      med.departement;
    this.lesMedecins = null;
    this.lesRapports = null;
    this.afficherMedecin = true;
    this.afficherTable = false;
    this.afficherMessage = false;
    this.afficherRapport = false;
  }
  // à commenter
  majMedecin(): void {
    this.afficherMedecin = true;
    this.afficherTable = false;
    this.afficherRapport = false;
  }
  // à commenter
  valider(): void {
    this.afficherMessage = true;
    this.medecinService.majMedecin(this.medecin)
      .then(
        (data) => { this.lblMessage = 'Enregistrement effectué'; }
        , (error) => { this.lblMessage = 'Merci de réessayer plus tard'; }
      );
  }

  derniersRapports(med): void {
    this.rapportService.chargerRapportMedecin(med.id)
      .subscribe((data) => { this.lesRapports = data; }, (error) => { });
    this.medecin = med;
    this.nomMedecin = med.nom + ' ' + med.prenom + ' ; dep : ' +
      med.departement;
    this.lesMedecins = null;
    this.afficherMedecin = false;
    this.afficherTable = false;
    this.afficherMessage = false;
    this.afficherRapport = true;
  }
}