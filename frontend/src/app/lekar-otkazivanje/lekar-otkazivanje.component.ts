import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PregledService } from '../services/pregled.service';
import { ObavestenjaService } from '../services/obavestenja.service';
import { Pregled } from '../models/pregled';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-lekar-otkazivanje',
  templateUrl: './lekar-otkazivanje.component.html',
  styleUrls: ['./lekar-otkazivanje.component.css']
})
export class LekarOtkazivanjeComponent implements OnInit {

  constructor(private korService:KorisnikService,private router:Router, private pregledService:PregledService,private obService:ObavestenjaService) { }

  ngOnInit(): void {
    this.pregled=JSON.parse(localStorage.getItem("pregled_brisanje"));
    this.lekar=JSON.parse(localStorage.getItem("ulogovan"))
  }
  pregled:Pregled;
  lekar:Korisnik;
  tekst:string;

  otkazi(){
    if(!this.tekst){
      this.error="Niste uneli razlog otkazivanja pregleda";
      return;
    }
    this.error="";
    //obrisi pregled i posalji obavestenje.
    this.pregledService.otkazi(this.pregled.id).subscribe(resp=>{
      let razlog='Vas pregled zakazan datuma ' + this.pregled.datum_formatted + " kod lekara " + this.lekar.ime + " " + this.lekar.prezime +
      " je otkazan iz sledecih razloga:\n" + this.tekst;
      this.obService.dodajNovo('Otkazan pregled',razlog,this.pregled.pacijent,false).subscribe(data=>{
        this.router.navigate(['lekar-pregledi']);
      })
    })
  }

  nazad(){
    this.router.navigate(['lekar-pregledi']);
  }

  error:string;

}
