import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatetacheService {

  urlVehicule = 'http://localhost:8080/api/tache/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}
}
