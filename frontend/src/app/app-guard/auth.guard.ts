import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if(this.auth.isLoggednIn()){
            const userRole = this.auth.getRole();
            if (route.data.role && route.data.role.indexOf(userRole) === -1) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }else{
            this.router.navigate(["/login"]);
            return false;
        }
    }
}
