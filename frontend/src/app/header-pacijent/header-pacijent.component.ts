import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentikacijaService } from '../services/autentikacija.service';

@Component({
  selector: 'app-header-pacijent',
  templateUrl: './header-pacijent.component.html',
  styleUrls: ['./header-pacijent.component.css']
})
export class HeaderPacijentComponent implements OnInit {

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
