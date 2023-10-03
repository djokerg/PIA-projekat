import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentikacijaService {

  constructor(private router:Router) {
    
  }

  login(role: string): void {
    sessionStorage.setItem("tip",role);
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['']);
  }

  getUserRole(): string {
    return sessionStorage.getItem("tip");
  }

  isAuthenticated(): boolean {
    return sessionStorage.getItem("tip")!=null;
  }
}
