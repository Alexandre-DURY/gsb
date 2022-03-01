import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { PraticienN } from './metier/praticien-n';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PraticienNService {
  private PraticiensUrl = 'http://localhost/restCrudVisiteur/tablePraticienN/';
  private headers = new Headers({'Content-Type': 'application/json'})

  constructor(private http: Http) { }
  public chargerPraticiens(nom_praticien: string): Observable<PraticienN[]> {
    const url = `${this.PraticiensUrl}read.php?nom_praticien=` + nom_praticien;
    return this.http.get(url).pipe(map((r:Response) => r.json() as PraticienN[]));
  }
  public majPraticien ( Praticien: PraticienN) : Promise<PraticienN> {
    const url = `${this.PraticiensUrl}update.php`;
    return this.http
    .put(url, JSON.stringify(Praticien), {headers: this.headers})
    .toPromise()
    .then(() => Praticien);
  }
  public deletePraticien ( id_praticien: number) : Observable<PraticienN> {
    const url = `${this.PraticiensUrl}delete.php?id_praticien=` + id_praticien;
    return this.http.delete(url).pipe(map((r:Response) => r.json() as PraticienN[]));
  }
}
