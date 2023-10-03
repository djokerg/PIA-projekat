import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentikacijaService } from '../services/autentikacija.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-header-lekar',
  templateUrl: './header-lekar.component.html',
  styleUrls: ['./header-lekar.component.css']
})
export class HeaderLekarComponent implements OnInit {

  constructor(private router:Router,private autentikacija:AutentikacijaService) { }

  ngOnInit(): void {
  }

  promeni_lozinku(){
    this.router.navigate(['promena-lozinke']);
  }

  logout(){
    localStorage.clear();
    this.autentikacija.logout();
  }

}
