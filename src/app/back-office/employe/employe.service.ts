import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeModel } from './model/employe.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  urlEmploye = 'http://localhost:8080/api/employe/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all Employe
   * @returns
   */
  getAllEmploye(): Observable<any> {
    return this.http.get(this.urlEmploye + 'all');
  }

  /**
   * 
   * @param employe 
   * @returns 
   */
  ajouterEmploye(employe: EmployeModel): Observable<any> {
    return this.http.post(this.urlEmploye + 'create', employe);
  }

  /**
   * update employe
   * @param employe
   * @returns
   */
  updateEmploye(employe: EmployeModel,id: number): Observable<any> {
    return this.http.put(this.urlEmploye+'modify/'+id, employe);
  }

  /**
   * get employe by id
   * @param id
   * @returns
   */
  getEmployeById(id: number): Observable<any> {
    return this.http.get(this.urlEmploye + id);
  }
  /**
   * delete employe
   * @param id
   * @returns
   */
  deleteEmploye(id: number): Observable<any> {
    return this.http.delete(this.urlEmploye + 'remove/' + id);
  }

  /**
   *
   * @param cin
   * @returns
   */
  rechercheEmployeByCin(cin: string): Observable<any> {
    return this.http.get(this.urlEmploye + 'find/' + cin);
  }
  /**
   * 
   */
   getAllCin(): Observable<any> {
    return this.http.get(this.urlEmploye + 'cin/all/');
  }
}
