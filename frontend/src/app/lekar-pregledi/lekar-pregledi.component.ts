import { Component, OnInit } from '@angular/core';
import { Pregled } from '../models/pregled';
import { PregledService } from '../services/pregled.service';
import { VrpregledaService } from '../services/vrpregleda.service';
import { VrPregleda } from '../models/vr-pregleda';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lekar-pregledi',
  templateUrl: './lekar-pregledi.component.html',
  styleUrls: ['./lekar-pregledi.component.css']
})
export class LekarPreglediComponent implements OnInit {

  constructor(private router:Router,private pregledService:PregledService,private vrpService:VrpregledaService,private korService:KorisnikService) { }

  ngOnInit(): void {
    //DOHVATANJE prva 3 pregleda
    this.pregledService.dohvSve().subscribe((pregledi:Pregled[])=>{
      pregledi = pregledi.filter(p=>{
        return p.lekar==JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime &&
        new Date(p.datum_vreme)>new Date();
      });
      pregledi.sort((a,b)=>{
        if(a.datum_vreme<b.datum_vreme) return -1;
        else if (b.datum_vreme==a.datum_vreme) return 0;
        else return 1;
      })
      pregledi = pregledi.slice(0,3);
      pregledi.forEach(p=>{
        p.datum_formatted = new Date(p.datum_vreme).toLocaleDateString() + " " + new Date(p.datum_vreme).toLocaleTimeString();
        this.korService.dohvKorisnika(p.pacijent).subscribe((pac:Korisnik)=>{
          p.p_ime_prezime=pac.ime + " " + pac.prezime;
        })
        this.vrpService.dohvVrstu(p.id_vrste).subscribe((vrsta:VrPregleda)=>{
          p.vrsta=vrsta;
        })
      })
      this.pregledi_3= pregledi;
    })
    //INICIJALIZACIJA PREGLEDA za izvestaje
    this.pregledService.dohvSve().subscribe((pregledi:Pregled[])=>{
      pregledi = pregledi.filter(p=>{
        return p.lekar==JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime && new Date(p.datum_vreme)<=new Date();
      });
      pregledi.sort((a,b)=>{
        if(a.datum_vreme<b.datum_vreme) return 1;
        else if (b.datum_vreme==a.datum_vreme) return 0;
        else return -1;
      })
      pregledi = pregledi.slice(0,3);
      pregledi.forEach(p=>{
        p.datum_formatted = new Date(p.datum_vreme).toLocaleDateString() + " " + new Date(p.datum_vreme).toLocaleTimeString();
        this.korService.dohvKorisnika(p.pacijent).subscribe((pac:Korisnik)=>{
          p.p_ime_prezime=pac.ime + " " + pac.prezime;
        })
        this.vrpService.dohvVrstu(p.id_vrste).subscribe((vrsta:VrPregleda)=>{
          p.vrsta=vrsta;
        })
      })
      this.pregledi= pregledi;
    })
  }

  pregledi:Pregled[]= []
  pregledi_3:Pregled[] = [];
  lekar:Korisnik = JSON.parse(localStorage.getItem("ulogovan"));
  otkazi(p){
    //srediti ovo
    localStorage.setItem("pregled_brisanje",JSON.stringify(p));
    this.router.navigate(['lekar-otkazivanje']);
  }

  izaberi_pacijenta(p){
    localStorage.setItem("izabrani_pacijent",p.pacijent);
    this.router.navigate(['lekar-karton'])
  }

  unesi_izvestaj(p){
    localStorage.setItem("izabrani_pregled",JSON.stringify(p));
    this.router.navigate(['lekar-unos-izvestaja']);
  }
}
