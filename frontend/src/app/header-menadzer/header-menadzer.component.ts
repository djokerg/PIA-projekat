import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentikacijaService } from '../services/autentikacija.service';

@Component({
  selector: 'app-header-menadzer',
  templateUrl: './header-menadzer.component.html',
  styleUrls: ['./header-menadzer.component.css']
})
export class HeaderMenadzerComponent implements OnInit {

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
