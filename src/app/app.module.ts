import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { VisitesComponent } from './visites/visites.component';
import { HttpModule } from '@angular/http';
import { VisiteurService } from './visiteur.service';
import { MedecinService } from './medecin.service';
import { RapportService } from './rapport.service';
import { PraticiensNComponent } from './praticiens-n/praticiens-n.component';
import { PraticiensSComponent } from './praticiens-s/praticiens-s.component';
import { PraticienNService } from './praticien-n.service';
import { PraticienSService } from './praticien-s.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    MedecinsComponent,
    VisitesComponent,
    PraticiensNComponent,
    PraticiensSComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [VisiteurService, MedecinService, RapportService, PraticienNService, PraticienSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }