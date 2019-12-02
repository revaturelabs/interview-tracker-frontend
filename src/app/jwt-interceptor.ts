import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const currentUser = this.authService.currentUserValue;
        if (currentUser && currentUser.username) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.username}`
                }
            });
        }

        else {
            request = request.clone({
                setHeaders: {
                    Authorization: ``
                }
            });
        }

        return next.handle(request);
    }
}
