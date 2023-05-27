import { FactureModel } from './model/facture.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  urlFacture = 'http://localhost:8080/api/facture/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Facture
   * @returns
   */
  getAllFacture(): Observable<any> {
    return this.http.get(this.urlFacture + 'all');
  }

  /**
   *
   * @param facture
   * @returns
   */
  ajouterFacture(facture: FactureModel): Observable<any> {
    return this.http.post(this.urlFacture + 'create', facture);
  }

  /**
   * update facture
   * @param facture
   * @returns
   */
  modifierFacture(facture: FactureModel, id: number): Observable<any> {
    return this.http.put(this.urlFacture + 'modify/' + id, facture);
  }

  /**
   * get maintenence by id
   * @param id
   * @returns
   */
  getFactureById(id: number): Observable<any> {
    return this.http.get(this.urlFacture + id);
  }

  /**
   *
   * @param facture
   * @returns
   */
  rechercheuFactureByRefrence(facture: string): Observable<any> {
    return this.http.get(this.urlFacture + 'find/' + facture);
  }

  /**
   *
   * @param id
   * @returns
   */
  imprimerFacture(id: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.http.post(this.urlFacture + 'imprimer/' + id, null, {
      headers: headers,
      responseType: 'blob',
    });
  }
}
