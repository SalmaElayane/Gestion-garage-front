import { Observable } from 'rxjs';
import { LoginCredentials } from './model/login-credentials.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlLogin = 'http://localhost:8080/api/authenticate';

  constructor(private http: HttpClient) {}

  login(loginCredentials: LoginCredentials): Observable<any> {
    return this.http.post(this.urlLogin, loginCredentials);
  }
}
