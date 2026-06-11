import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { finalize } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';


export function SpinnerInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
    let spinnerService: SpinnerService = inject(SpinnerService);
    spinnerService.show();
    // Pasa la solicitud al siguiente manejador en la cadena de interceptores
    return next(req).pipe(finalize(() => spinnerService.hide()));
};