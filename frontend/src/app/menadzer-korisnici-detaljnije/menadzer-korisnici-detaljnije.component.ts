import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menadzer-korisnici-detaljnije',
  templateUrl: './menadzer-korisnici-detaljnije.component.html',
  styleUrls: ['./menadzer-korisnici-detaljnije.component.css']
})
export class MenadzerKorisniciDetaljnijeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.korisnik=JSON.parse(localStorage.getItem("izabrani_korisnik"));
  }

  korisnik:Korisnik;

  azuriraj(){
    this.router.navigate(['menadzer-korisnici-azuriraj']);
  }

}
