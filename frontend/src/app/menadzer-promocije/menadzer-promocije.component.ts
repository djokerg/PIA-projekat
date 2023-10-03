import { Component, OnInit } from '@angular/core';
import { ObavestenjaService } from '../services/obavestenja.service';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-menadzer-promocije',
  templateUrl: './menadzer-promocije.component.html',
  styleUrls: ['./menadzer-promocije.component.css']
})
export class MenadzerPromocijeComponent implements OnInit {

  constructor(private korService:KorisnikService,private obService:ObavestenjaService) { }

  ngOnInit(): void {
    this.korService.dohvKorisnike().subscribe((data:Korisnik[])=>{
      this.korisnici=data;      
    })
  }
  korisnici:Korisnik[] = [];
  error:string;
  naslov:string;
  tekst:string;

  async dodaj(){
    if(!this.naslov || !this.tekst){
      this.error="Niste uneli sve potrebne podatke";
      return;
    }
    this.error="";
    await this.dodajNovoFor();
    alert('Uspesno poslata promocija');
      this.naslov=""
      this.tekst="";
    
  }

  async dodajNovoFor(){
    for(let k of this.korisnici){
      if(k.tip=='pacijent' && k.prihvacen && !k.odbijen){
        await this.obService.dodajNovoAsync(this.naslov,this.tekst,k.korisnicko_ime,false);
      }
    }
  }

}
