import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_KEY, APP_SECRET } from '../../kinvey.tokens';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private readonly BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  get token() {
    return localStorage.getItem('token');
  }

  signUp(body: Object) {
    return this.http.post(this.BASE_URL, body);
  }

  signIn(body: Object) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  }

  isAuthenticated() {
    return this.token !== null;
  }

  saveUserInfo(res: Object) {
    // tslint:disable-next-line: no-string-literal
    localStorage.setItem('username', res['username']);
    // tslint:disable-next-line: no-string-literal
    localStorage.setItem('token', res['_kmd']['authtoken']);
    // tslint:disable-next-line: no-string-literal
    localStorage.setItem('userId', res['_id']);
  }
}
