import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageInterceptorService implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        tap((success: HttpEvent<any>) => {
          if (success instanceof HttpResponse && success.url.endsWith('login')) {
            this.toastr.success('Logged in successfully');
          } else if (success instanceof HttpResponse && success.url.endsWith('register')) {
            this.toastr.success('Registered in successfully');
          } else if (success instanceof HttpResponse && success.url.endsWith('create')) {
            this.toastr.success('Post created in successfully');
          }
        }), catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.toastr.error(err.error.description);
          }
          return throwError(err);
        })
      );
  }
}
