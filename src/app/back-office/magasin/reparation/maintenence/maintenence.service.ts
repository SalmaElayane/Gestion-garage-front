import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaintenenceModel } from './model/maintenance.model';

@Injectable({
  providedIn: 'root',
})
export class MaintenenceService {
  urlMaintenence = 'http://localhost:8080/api/maintenence/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Maintenence
   * @returns
   */
  getAllMaintenence(): Observable<any> {
    return this.http.get(this.urlMaintenence + 'all');
  }

  /**
   *
   * @param maintenence
   * @returns
   */
  ajouterMaintenence(maintenence: MaintenenceModel): Observable<any> {
    return this.http.post(this.urlMaintenence + 'create', maintenence);
  }

  /**
   * update maintenence
   * @param maintenence
   * @returns
   */
  updateMaintenence(
    maintenence: MaintenenceModel,
    id: number
  ): Observable<any> {
    return this.http.put(this.urlMaintenence + 'modify/' + id, maintenence);
  }

  /**
   * get maintenence by id
   * @param id
   * @returns
   */
  getMaintenenceById(id: number): Observable<any> {
    return this.http.get(this.urlMaintenence + id);
  }
  /**
   * delete maintenence
   * @param id
   * @returns
   */
  deleteMaintenence(id: number): Observable<any> {
    return this.http.delete(this.urlMaintenence + 'remove/' + id);
  }

  /**
   *
   * @param reference
   * @returns
   */
  rechercheMaintenenceByRefrence(reference: string): Observable<any> {
    return this.http.get(this.urlMaintenence + 'find/' + reference);
  }
}
