import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdaterendezVousService {

  urlRendezVous = 'http://localhost:8080/api/rendezVous/';

  /**
   * inject http client DEPENDENCY
   * @param http
   */
   constructor(private http: HttpClient) {}
}
