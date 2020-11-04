import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../shared/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public httpClient: HttpService, private myRoute: Router) { }

  login(data) {
    return this.httpClient.post('auth', data, {});
  }

  sendToken(token, status) {
    sessionStorage.setItem("LoggedInUser", token.email);
    sessionStorage.setItem("LoggedStatus", status);
    sessionStorage.setItem("LoggedInUserData", token.name);
    sessionStorage.setItem("x-auth-token", token.token)
    sessionStorage.setItem("LoggedInUserType", token.type);
  }

  getToken() {
    return sessionStorage.getItem("LoggedInUserData");
  }

  getType() {
    return sessionStorage.getItem("LoggedInUserType");
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  getRole() {
    return sessionStorage.getItem('LoggedInUserType');
  }

  logout() {
    sessionStorage.removeItem("LoggedInUser");
    sessionStorage.removeItem("LoggedInUserData");
    sessionStorage.removeItem("LoggedStatus");
    sessionStorage.removeItem("LoggedInUserType");
    sessionStorage.removeItem("x-auth-token");
    this.myRoute.navigate(["login"]);
  }
}
