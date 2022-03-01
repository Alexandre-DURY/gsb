import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Medecin } from './metier/medecin';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private MedecinsUrl = 'http://localhost/restCrudVisiteur/tableMedecin/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  public chargerMedecins(nomMedecin: string): Observable<Medecin[]> {
    const url = `${this.MedecinsUrl}read.php?nom=` + nomMedecin;
    return this.http.get(url).pipe(map((r:Response) => r.json() as Medecin[]));
  }
  public majMedecin ( medecin: Medecin) : Promise<Medecin> {
    const url = `${this.MedecinsUrl}update.php`;
    return this.http
    .put(url, JSON.stringify(medecin), {headers: this.headers})
    .toPromise()
    .then(() => medecin);
  }
}
