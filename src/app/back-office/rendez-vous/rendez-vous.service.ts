import { RendezVousModel } from './model/rendezVous.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RendezVousService {
  urlRendezVous = 'http://localhost:8080/api/rendezVous/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all RendezVous
   * @returns
   */
  getAllRendezVous(statut: string): Observable<any> {
    return this.http.get(this.urlRendezVous + 'all/' + statut);
  }

  /**
   *
   * @param rendezVous
   * @returns
   */
  envoyerRendezVous(rendezVous: RendezVousModel): Observable<any> {
    return this.http.post(this.urlRendezVous + 'create', rendezVous);
  }

  /**
   * update rendezVous
   * @param rendezVous
   * @returns
   */
  updateRendezVous(rendezVous: RendezVousModel, id: number): Observable<any> {
    return this.http.put(this.urlRendezVous + 'modify/' + id, rendezVous);
  }

  /**
   * valider RendezVous
   * @param rendezVous
   * @returns
   */
  validerRendezVous(id: number): Observable<any> {
    return this.http.put(this.urlRendezVous + 'valider/' + id, null);
  }

  /**
   * refuser RendezVous
   * @param rendezVous
   * @returns
   */
  refuserRendezVous(id: number): Observable<any> {
    return this.http.put(this.urlRendezVous + 'refuser/' + id, null);
  }
  /**
   * get RendezVous by id
   * @param id
   * @returns
   */
  getRendezVousById(id: number): Observable<any> {
    return this.http.get(this.urlRendezVous + id);
  }

  /**
   *
   * @param reference
   * @returns
   */
  rechercheRendezVousByReference(reference: string): Observable<any> {
    return this.http.get(this.urlRendezVous + 'find/' + reference);
  }
  /**
   * delete RendezVous
   * @param id
   * @returns
   */
  deleteRendezVous(id: number): Observable<any> {
    return this.http.delete(this.urlRendezVous + 'remove/' + id);
  }
}
