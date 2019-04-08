import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadPostsGuard implements CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canLoad(route: Route, segments: UrlSegment[]) {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
