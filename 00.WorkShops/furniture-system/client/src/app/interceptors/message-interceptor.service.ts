import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
            this.toastr.success(success.body.message);
          } else if (success instanceof HttpResponse && success.url.endsWith('register')) {
            this.toastr.success(success.body.message);
          } else if (success instanceof HttpResponse && success.url.endsWith('create')) {
            this.toastr.success(success.body.message);
          }	else if (success instanceof HttpResponse && success.url.includes('edit')) {
            this.toastr.success(success.body.message);
          }
        }), catchError((err) => {
          this.toastr.error(err.error.message);
          if (err.error.errors) {
            for (const e in err.error.errors) {
              if (err.error.errors.hasOwnProperty(e)) {
                this.toastr.error(err.error.errors[e]);
              }
            }
          }
          throw err;
        })
      );
  }
}
