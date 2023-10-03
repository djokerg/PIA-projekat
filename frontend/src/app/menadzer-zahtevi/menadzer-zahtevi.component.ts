import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';
import { VrPregleda } from '../models/vr-pregleda';
import { VrpregledaService } from '../services/vrpregleda.service';

@Component({
  selector: 'app-menadzer-zahtevi',
  templateUrl: './menadzer-zahtevi.component.html',
  styleUrls: ['./menadzer-zahtevi.component.css']
})
export class MenadzerZahteviComponent implements OnInit {

  constructor(private korService:KorisnikService,private vrpService:VrpregledaService){}
  ngOnInit(): void {
    this.korService.dohvKorisnike().subscribe((kor:Korisnik[])=>{
      this.korisnici=kor.filter(k=> k.prihvacen==false && k.odbijen==false && k.tip=='pacijent');
    })
    this.vrpService.dohvSve().subscribe((vrste:VrPregleda[])=>{
      this.vrPregleda=vrste.filter(vrp=> vrp.prihvacena==false && vrp.odbijena==false && vrp.obrisana==false);
    })
  }

  korisnici:Korisnik[]=[]
  vrPregleda:VrPregleda[]=[]

  prihvati(k){
    k.prihvacen=true;
    this.korService.azuriraj(k).subscribe(resp=>{
      this.ngOnInit();
    })
  }

  odbij(k){
    k.odbijen=true;
    this.korService.azuriraj(k).subscribe(resp=>{
      this.ngOnInit();
    })
  }

  prihvatiVr(vrp){
    vrp.prihvacena=true;
    this.vrpService.azuriraj(vrp).subscribe(resp=>{
      this.ngOnInit();
    })
  }

  odbijVr(vrp){
    vrp.odbijena=true;
    this.vrpService.azuriraj(vrp).subscribe(resp=>{
      this.ngOnInit();
    })
  }

}
