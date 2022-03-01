import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Posseder } from './metier/posseder';
import { map } from 'rxjs/operators';
import {PraticienN} from './metier/praticien-n';

@Injectable({
  providedIn: 'root'
})
export class PossederService {

  private PossederUrl = 'http://localhost/restCrudVisiteur/tablePosseder/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  public chargerSpecialite(id_praticien: number): Observable<Posseder[]> {
    const url = `${this.PossederUrl}read.php?id_praticien=` + id_praticien;
    return this.http.get(url).pipe(map((r:Response) => r.json() as Posseder[]));
  }
  public modifier (Posseder : Posseder) {
    const url = `${this.PossederUrl}update.php`;
    return this.http
    .put(url, JSON.stringify(Posseder), {headers : this.headers})
    .toPromise()
    .then(() => Posseder);
  }
  public supprimer (id_praticien : number , id_specialite : number) {
    const url = `${this.PossederUrl}delete.php?id_praticien=`+id_praticien + `&id_specialite=`+id_specialite;
    return this.http.delete(url,{headers : this.headers});
  }
  public ajouter (Posseder : Posseder) {
  const url = `${this.PossederUrl}create.php` ;
    return this.http.post(url, JSON.stringify(Posseder), {headers : this.headers});
  }
  public chargerLesPraticiensParSpecialite( id_specialite : number): Observable<PraticienN[]>{
    const url = `${this.PossederUrl}read.php?id_specialite=` + id_specialite;
    return this.http.get(url).pipe(map((r:Response) => r.json() as PraticienN[]));
  }
}
