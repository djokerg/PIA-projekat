import { Injectable } from '@angular/core';
import { AutentikacijaService } from './autentikacija.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AutentikacijaService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];

    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }

    if (expectedRole && this.authService.getUserRole() != expectedRole) {
      this.router.navigate([this.authService.getUserRole()]);
      return false;
    }

    return true;
  }
}
