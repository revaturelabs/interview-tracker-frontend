import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const customReq = request.clone({
<<<<<<< HEAD
            headers: request.headers.set("auth", localStorage.getItem('user'))
=======
            headers: request.headers.set('auth', sessionStorage.getItem('user'))
>>>>>>> LyssaBranch
        });
        return next.handle(customReq);
    }

}
