
import { inject } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service'
import { environment } from '../../../environments/environment';


export function AuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let auth = inject(SecurityService).getLocalAuthKey();

  if (!auth.includes(environment.origin)) {
    auth = "Bearer " + auth;
  }

  if (!auth) {
    return next(req);
  }
  if (auth) {
    req = req.clone({
      setHeaders: {
        Authorization: auth
      },

       headers: req.headers.delete('sec-fetch-site')
    });
  }
  return next(req);
};


