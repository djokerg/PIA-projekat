import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  constructor(private router:Router, private korService:KorisnikService) { }

  ngOnInit(): void {
  }

  prijava(){
    this.router.navigate(['login']);
  }

  registracija(){
    this.router.navigate(['registracija']);
  }
  images = [
    { url: 'http://localhost:4000/uploads/picture1.jpg' },
    { url: 'http://localhost:4000/uploads/picture2.jpg' },
    { url: 'http://localhost:4000/uploads/picture3.jpg'},
    { url: 'http://localhost:4000/uploads/picture4.jpg'},
    { url: 'http://localhost:4000/uploads/picture5.jpg'},
    { url: 'http://localhost:4000/uploads/picture6.jpg'}
  ];
}
