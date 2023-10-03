import { Component, OnInit } from '@angular/core';
import { Izvestaj } from '../models/izvestaj';
import { KorisnikService } from '../services/korisnik.service';
import { IzvestajService } from '../services/izvestaj.service';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';
import { Pregled } from '../models/pregled';
import { VrPregleda } from '../models/vr-pregleda';
import { VrpregledaService } from '../services/vrpregleda.service';
import { PregledService } from '../services/pregled.service';

@Component({
  selector: 'app-lekar-karton',
  templateUrl: './lekar-karton.component.html',
  styleUrls: ['./lekar-karton.component.css']
})
export class LekarKartonComponent implements OnInit {

  constructor(private korService:KorisnikService,private izvestajService:IzvestajService,private router:Router) { }

  ngOnInit(): void {
    //INICJALIZACIJA IZVESTAJA
    this.korService.dohvKorisnika(localStorage.getItem("izabrani_pacijent")).subscribe((pac:Korisnik)=>{
      this.pacijent=pac;
      this.izvestajService.dohvSveZaKor(this.pacijent.korisnicko_ime).subscribe((izv:Izvestaj[])=>{
        izv.sort((a,b)=> {
          if(a.datum_vreme<b.datum_vreme) return 1;
          else if (b.datum_vreme==a.datum_vreme) return 0;
          else return -1;
        });
        izv.forEach(i=>{
          i.datum_formatted = new Date(i.datum_vreme).toLocaleDateString() + " " + new Date(i.datum_vreme).toLocaleTimeString();
          i.prep_formatted = new Date(i.prep_datum).toLocaleDateString() + " " + new Date(i.prep_datum).toLocaleTimeString();
          this.korService.dohvKorisnika(i.lekar).subscribe((l:Korisnik)=>{
            i.l_ime_prezime=l.ime + " " + l.prezime;
          })
        })
        this.izvestaji=izv;
      })
    })
  }

  izvestaji:Izvestaj[] = []
  pacijent:Korisnik;

  nazad(){
    this.router.navigate(['lekar-pregledi']);
  }
}
