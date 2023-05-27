import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilisateurModel } from './model/utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  urlUtilisateur = 'http://localhost:8080/api/utilisateur/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Utilisateur
   * @returns
   */
  getAllUtilisateur(): Observable<any> {
    return this.http.get(this.urlUtilisateur + 'all');
  }

  /**
   * add Utilisateur
   * @param utilisateur
   * @returns
   */
  ajouterUtilisateur(utilisateur: UtilisateurModel): Observable<any> {
    return this.http.post(this.urlUtilisateur + 'create', utilisateur);
  }

  /**
   * update Utilisateur
   * @param utilisateur
   * @returns
   */
  updateUtilisateur(
    utilisateur: UtilisateurModel,
    id: number
  ): Observable<any> {
    return this.http.put(this.urlUtilisateur + 'modify/' + id, utilisateur);
  }

  /**
   * get Utilisateur by id
   * @param id
   * @returns
   */
  getUtilisateurById(id: number): Observable<any> {
    return this.http.get(this.urlUtilisateur + id);
  }
  /**
   * delete Utilisateur
   * @param id
   * @returns
   */
  deleteUtilisateur(id: number): Observable<any> {
    return this.http.delete(this.urlUtilisateur + 'remove/' + id);
  }

  /**
   *
   * @param cin
   * @returns
   */
  rechercheUtilisateurByCin(cin: string): Observable<any> {
    return this.http.get(this.urlUtilisateur + 'find/' + cin);
  }

  /**
   * 
   */
  getAllCin(): Observable<any> {
    return this.http.get(this.urlUtilisateur + 'cin/all/');
  }
  
  getAllEmail(): Observable<any> {
    return this.http.get(this.urlUtilisateur + 'email/all/');
  }
}
