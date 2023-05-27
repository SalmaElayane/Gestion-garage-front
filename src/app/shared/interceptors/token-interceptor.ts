import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Location } from '@angular/common';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private location: Location) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let jwtToken: any = JSON.parse(localStorage.getItem('jwt'));
    if (jwtToken) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer '+jwtToken,
        },
      });
    }
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.message));
      })
    );
  }
}
