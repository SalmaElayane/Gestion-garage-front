import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TacheModel } from './model/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  urlTache = 'http://localhost:8080/api/tache/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Tache
   * @returns
   */
  getAllTache(): Observable<any> {
    return this.http.get(this.urlTache + 'all');
  }

  /**
   * 
   * @param tache 
   * @returns 
   */
  ajouterTache(tache: TacheModel): Observable<any> {
    return this.http.post(this.urlTache + 'create', tache);
  }

  /**
   * update tache
   * @param tache
   * @returns
   */
  updateTache(tache: TacheModel,id: number): Observable<any> {
    return this.http.put(this.urlTache+'modify/'+id, tache);
  }

  /**
   * get tache by id
   * @param id
   * @returns
   */
  getTacheById(id: number): Observable<any> {
    return this.http.get(this.urlTache + id);
  }
  /**
   * delete tache
   * @param id
   * @returns
   */
  deleteTache(id: number): Observable<any> {
    return this.http.delete(this.urlTache + 'remove/' + id);
  }

  /**
   *
   * @param ref
   * @returns
   */
  rechercheTacheByReference(ref: string): Observable<any> {
    return this.http.get(this.urlTache + 'find/' + ref);
  }
}
