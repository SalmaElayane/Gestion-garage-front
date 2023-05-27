import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddvehiculesService {

  urlVehicule = 'http://localhost:8080/api/voiture/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
  constructor(private http: HttpClient) {}

}
