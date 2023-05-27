import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiagnosticModel } from './model/diagnostic.model';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  urlDiagnostic = 'http://localhost:8080/api/diagnostic/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

  /**
   * get all diagnostic
   * @returns
   */
  getAllDiagnostic(): Observable<any> {
    return this.http.get(this.urlDiagnostic + 'all');
  }

  /**
   * 
   * @param diagnostic
   * @returns 
   */
  ajouterDiagnostic(diagnostic: DiagnosticModel): Observable<any> {
    return this.http.post(this.urlDiagnostic + 'create', diagnostic);
  }

  /**
   * update diagnostic
   * @param diagnostic
   * @returns
   */
  updateDiagnostic(diagnostic: DiagnosticModel,id: number): Observable<any> {
    return this.http.put(this.urlDiagnostic+'modify/'+id, diagnostic);
  }

  /**
   * get diagnostic by id
   * @param id
   * @returns
   */
  getDiagnosticById(id: number): Observable<any> {
    return this.http.get(this.urlDiagnostic + id);
  }
  /**
   * delete diagnostic
   * @param id
   * @returns
   */
  deleteDiagnostic(id: number): Observable<any> {
    return this.http.delete(this.urlDiagnostic  +'remove/'+ id);
  }

  /**
   *
   * @param reference
   * @returns
   */
  rechercheDiagnosticByReference(reference: string): Observable<any> {
    return this.http.get(this.urlDiagnostic + 'find/' + reference);
  }
}
