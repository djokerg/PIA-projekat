import { Component, OnInit } from '@angular/core';
import { PregledService } from '../services/pregled.service';
import { VrpregledaService } from '../services/vrpregleda.service';
import { KorisnikService } from '../services/korisnik.service';
import { Pregled } from '../models/pregled';
import { Korisnik } from '../models/korisnik';
import { VrPregleda } from '../models/vr-pregleda';
import { Izvestaj } from '../models/izvestaj';
import { IzvestajService } from '../services/izvestaj.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lekar-unos-izvestaja',
  templateUrl: './lekar-unos-izvestaja.component.html',
  styleUrls: ['./lekar-unos-izvestaja.component.css']
})
export class LekarUnosIzvestajaComponent implements OnInit {

  constructor(private izvService:IzvestajService,private router:Router,private pregledService:PregledService) { }

  ngOnInit(): void {
    let pregled = JSON.parse(localStorage.getItem("izabrani_pregled"));
    this.lekar=pregled.lekar;
    this.pacijent=pregled.pacijent;
    this.razlog_dolaska=pregled.vrsta.naziv;
  }

  datum_vreme: Date;
  lekar: string;
  razlog_dolaska:string;
  dijagnoza:string;
  prep_terapija: string;
  prep_datum: Date;
  pacijent:string;
  error:string;

  sacuvaj(){
    if(!this.datum_vreme || !this.razlog_dolaska || !this.dijagnoza || !this.prep_terapija || !this.prep_datum){
      this.error="Niste uneli sve podatke";
      return;
    }
    this.error="";
    this.izvService.dodajNovi(this.datum_vreme,this.lekar,this.razlog_dolaska,this.dijagnoza,this.prep_terapija,this.prep_datum,this.pacijent).subscribe(resp=>{
      alert(resp['msg']);
      this.pregledService.otkazi(JSON.parse(localStorage.getItem("izabrani_pregled")).id).subscribe(resp=>{
        this.router.navigate(['lekar-pregledi']);
      })
    })
  }

  nazad(){
    this.router.navigate(['lekar-pregledi'])
  }
}
