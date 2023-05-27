import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehiculeModel } from './model/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {

  urlVehicule = 'http://localhost:8080/api/voiture/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Vehicule
   * @returns
   */
  getAllVehicule(): Observable<any> {
    return this.http.get(this.urlVehicule + 'all');
  }

  /**
   * 
   * @param vehicule 
   * @returns 
   */
  ajouterVehicule(vehicule: VehiculeModel): Observable<any> {
    return this.http.post(this.urlVehicule + 'create', vehicule);
  }

  /**
   * update vehicule
   * @param vehicule
   * @returns
   */
  updateVehicule(vehicule: VehiculeModel,id: number): Observable<any> {
    return this.http.put(this.urlVehicule + 'modify/'+id, vehicule);
  }

  /**
   * get vehicule by id
   * @param id
   * @returns
   */
  getVehiculeById(id: number): Observable<any> {
    return this.http.get(this.urlVehicule + id);
  }
  /**
   * delete vehicule
   * @param id
   * @returns
   */
  deleteVehicule(id: number): Observable<any> {
    return this.http.delete(this.urlVehicule +'remove/'+ id);
  }

  /**
   *
   * @param matricule
   * @returns
   */
  rechercheVehiculeByMatricule(matricule: string): Observable<any> {
    return this.http.get(this.urlVehicule + 'find/' + matricule);
  }
  /**
   * 
   */
   getAllMatricule(): Observable<any> {
    return this.http.get(this.urlVehicule + 'matricule/all/');
  }
}
