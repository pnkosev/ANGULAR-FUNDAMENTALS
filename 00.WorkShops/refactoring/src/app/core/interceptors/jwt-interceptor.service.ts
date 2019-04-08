import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.tokens';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith(`/user/${APP_KEY}`) || req.url.endsWith('login')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
          'Content-Type': 'application/json'
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          Authorization: `Kinvey ${this.authService.token}`
        }
      });
    }
    return next.handle(req)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse && req.url.endsWith('login')) {
            this.authService.saveUserInfo(event.body);
          }
        })
      );
  }
}
