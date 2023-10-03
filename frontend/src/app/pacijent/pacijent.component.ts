import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';
import { AutentikacijaService } from '../services/autentikacija.service';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-pacijent',
  templateUrl: './pacijent.component.html',
  styleUrls: ['./pacijent.component.css']
})
export class PacijentComponent implements OnInit {

  constructor(private router:Router,private autentikacija:AutentikacijaService) { }

  ngOnInit(): void {
    this.korisnik=JSON.parse(localStorage.getItem("ulogovan"));
  }

  promeni_lozinku(){
    this.router.navigate(['promena-lozinke']);
  }

  logout(){
    localStorage.clear();
    this.autentikacija.logout();
  }

  korisnik:Korisnik;

  azuriraj(){
    this.router.navigate(['pacijent-azuriraj']);
  }
}
