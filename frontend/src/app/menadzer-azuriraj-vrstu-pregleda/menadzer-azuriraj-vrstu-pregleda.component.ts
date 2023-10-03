import { Component, OnInit } from '@angular/core';
import { Specijalizacija } from '../models/specijalizacija';
import { VrpregledaService } from '../services/vrpregleda.service';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';
import { VrPregleda } from '../models/vr-pregleda';
import { Router } from '@angular/router';
import { Pregled } from '../models/pregled';
import { PregledService } from '../services/pregled.service';
import { ObavestenjaService } from '../services/obavestenja.service';

@Component({
  selector: 'app-menadzer-azuriraj-vrstu-pregleda',
  templateUrl: './menadzer-azuriraj-vrstu-pregleda.component.html',
  styleUrls: ['./menadzer-azuriraj-vrstu-pregleda.component.css']
})
export class MenadzerAzurirajVrstuPregledaComponent implements OnInit {

  constructor(private obService:ObavestenjaService,private vrPService:VrpregledaService,private router:Router,private pregledService:PregledService) { }

  ngOnInit(): void {
    this.p=JSON.parse(localStorage.getItem("izabrana_vrsta"));
    this.pocetna=this.p.cena;
    this.pregledService.dohvSve().subscribe((data:Pregled[])=>{
      this.pregledi=data;
    })
  }
  pocetna:number;
  error:string;
  p:VrPregleda;
  pregledi:Pregled[];

  async azuriraj(){
    if(this.p.naziv=="" || !this.p.cena || !this.p.trajanje){
      this.error="Niste uneli sve potrebne podatke";
      return;
    }
    this.error="";
    this.vrPService.azuriraj(this.p).subscribe(resp=>{
    })
    if(this.pocetna!=this.p.cena){
      await this.posaljiObavestenja();
    }
    this.router.navigate(['menadzer-pregledi']);
    
    
  }
  async posaljiObavestenja(){
    let poslata = [];
    for(let pr of this.pregledi){
      if(pr.id_vrste==this.p.id && !poslata.includes(pr.pacijent) && new Date()<new Date(pr.datum_vreme)){
        poslata.push(pr.pacijent);
        let naslov = 'Promena cene pregleda - ' + this.p.naziv;
        let tekst = "Trenutna cena " + this.p.naziv + " iznosi " + this.p.cena+ " dinara.";
        await this.obService.dodajNovoAsync(naslov,tekst,pr.pacijent,false);
      }
    }
  }
}
