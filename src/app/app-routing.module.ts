import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { ConnexionComponent } from "./connexion/connexion.component";
import { MedecinsComponent } from "./medecins/medecins.component";
import { VisitesComponent } from "./visites/visites.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PraticiensSComponent } from "./praticiens-s/praticiens-s.component";
import { PraticiensNComponent } from "./praticiens-n/praticiens-n.component";

const routes: Routes = [
    { path: '', redirectTo: '/connexion', pathMatch: 'full' },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'medecins', component: MedecinsComponent }, 
    { path: 'visites', component: VisitesComponent }, 
    { path: 'accueil', component: NavbarComponent },
    { path: 'praticiens-s', component: PraticiensSComponent},
    { path: 'praticiens-n', component: PraticiensNComponent}

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{ }
