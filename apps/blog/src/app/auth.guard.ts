import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let logged = false;
    this.authService.isAuthenticated.subscribe(isAuthenticated => {
      logged = isAuthenticated;
    });

    console.log(url, logged);

    if (url === '/login' && logged) {
      this.router.navigate(['']);
      return false;
    }

    if (!logged && url !== '/login') {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
