import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { AutentikacijaService } from '../services/autentikacija.service';
import { Router } from '@angular/router';
import { VrPregleda } from '../models/vr-pregleda';
import { VrpregledaService } from '../services/vrpregleda.service';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';
import { Specijalizacija } from '../models/specijalizacija';

@Component({
  selector: 'app-lekar',
  templateUrl: './lekar.component.html',
  styleUrls: ['./lekar.component.css']
})
export class LekarComponent implements OnInit {

  constructor(private router:Router,private autentikacija:AutentikacijaService,private vrpService:VrpregledaService, private specService:SpecijalizaciijaService) { }

  ngOnInit(): void {
    this.korisnik=JSON.parse(localStorage.getItem("ulogovan"));
    this.specService.dohvSpec(this.korisnik.dodatno['specijalizacija']).subscribe((spec:Specijalizacija)=>{
      spec.id_vr_pregleda.forEach(id_vr=>{
        this.vrpService.dohvVrstu(id_vr).subscribe((vrsta:VrPregleda)=>{
          if(vrsta.lekari.includes(this.korisnik.korisnicko_ime) && vrsta.prihvacena && !vrsta.obrisana){
            this.vr_pregleda_obavlja.push(vrsta);
          }else if(vrsta.prihvacena && !vrsta.obrisana){
            this.vr_pregleda_neob.push(vrsta);
          }
        })
      })
    })
  }

  korisnik:Korisnik;
  vr_pregleda_neob:VrPregleda[]=[];
  vr_pregleda_obavlja:VrPregleda[] = [];

  azuriraj(){
    this.router.navigate(['lekar-azuriraj']);
  }

  dodaj(vrp){
    this.vrpService.dodajLekara(this.korisnik.korisnicko_ime,vrp.id).subscribe((resp)=>{
      this.vr_pregleda_neob = [];
      this.vr_pregleda_obavlja= [];
      this.ngOnInit();
    })
  }

}
