import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Specialite } from './metier/specialite';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  private SpecialiteUrl = 'http://localhost/restCrudVisiteur/tableSpecialite/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
  public chargerAllSpecialites(): Observable<Specialite[]>{
    const url = `${this.SpecialiteUrl}read.php` ;
    return this.http.get(url).pipe(map((r:Response) => r.json() as Specialite[]));
  }
}
