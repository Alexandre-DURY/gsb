import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisiteurService } from '../visiteur.service';
import { Visiteur } from '../visiteur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

titre: string = 'Connexion';
login: string ;
lblLogin: string = 'Votre login';
lblMdp: string = 'Votre mot de passe';
mdp: string;
lblMessage: string;
estCache: boolean = true;
visiteur: Visiteur;
constructor(private router: Router,  private visiteurService: VisiteurService) {
}
ngOnInit() {
}
valider(): void{
    this.estCache = true; 
    this.visiteurService.getVisiteurParLogin(this.login, this.mdp).subscribe(
      (data) => {this.visiteur = data;
        this.router.navigate(['accueil']); }
      , (error) => {this.estCache = false;
                this.lblMessage = 'Votre login ou votre mot de passe est erroné'}
    );
  }
}