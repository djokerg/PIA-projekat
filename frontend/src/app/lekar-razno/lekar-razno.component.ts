import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { VrpregledaService } from '../services/vrpregleda.service';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-lekar-razno',
  templateUrl: './lekar-razno.component.html',
  styleUrls: ['./lekar-razno.component.css']
})
export class LekarRaznoComponent implements OnInit {

  constructor(private korService:KorisnikService,private vrPService:VrpregledaService,private router:Router) { }

  ngOnInit(): void {
    this.lekar=JSON.parse(localStorage.getItem("ulogovan"));
  }

  naziv:string;
  trajanje:number;
  cena:number;
  lekar:Korisnik;
  error:string;
  error2:string;
  datum_od:Date;
  datum_do:Date;

  async dodajSlobodne(){
    if(!this.datum_od || !this.datum_do){
      this.error2="Unesite sva polja";
      return;
    }
    this.error2="";
    let iter = new Date(this.datum_od);
    while(iter<=new Date(this.datum_do)){
      await this.korService.dodajSlobodan(this.lekar.korisnicko_ime,iter.toISOString().slice(0,10));
      iter.setDate(iter.getDate()+1);
    }
    alert('Dodati slobodni dani');
    this.korService.dohvKorisnika(this.lekar.korisnicko_ime).subscribe((data:Korisnik)=>{
      this.lekar=data;
      localStorage.setItem("ulogovan",JSON.stringify(data));
      this.router.navigate(['lekar']);
    })
  }

  dodaj(){
    if(!this.naziv || !this.cena){
      this.error="Niste uneli sve potrebne podatke";
      return;
    }
    this.error="";
    this.vrPService.dodajNovu(this.naziv,this.cena,this.trajanje? this.trajanje:30,[this.lekar.korisnicko_ime],false,false,false,this.lekar.dodatno['specijalizacija']).subscribe(resp=>{
      alert(resp['msg']);
      this.router.navigate(['lekar']);
    })
  }

}
