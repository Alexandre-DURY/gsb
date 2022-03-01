import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Rapport } from './metier/rapport';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  private RapportUrl = 'http://localhost/restCrudVisiteur/tableRapport/';
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }
  public chargerRapportMedecin(idMedecin: number): Observable<Rapport[]> {
    const url = `${this.RapportUrl}read.php?idMedecin=` + idMedecin;
    return this.http.get(url).pipe(map((r:Response) => r.json() as Rapport[]));
  }
  public majRapportMedecin ( rapport: Rapport) : Promise<Rapport> {
    const url = `${this.RapportUrl}update.php`;
    return this.http
    .put(url, JSON.stringify(rapport), {headers: this.headers})
    .toPromise()
    .then(() => rapport);
  }
}
