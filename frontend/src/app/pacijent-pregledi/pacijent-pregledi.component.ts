import { Component, OnInit } from '@angular/core';
import { PregledService } from '../services/pregled.service';
import { IzvestajService } from '../services/izvestaj.service';
import { Pregled } from '../models/pregled';
import { Izvestaj } from '../models/izvestaj';
import { KorisnikService } from '../services/korisnik.service';
import { VrpregledaService } from '../services/vrpregleda.service';
import { Korisnik } from '../models/korisnik';
import { VrPregleda } from '../models/vr-pregleda';

@Component({
  selector: 'app-pacijent-pregledi',
  templateUrl: './pacijent-pregledi.component.html',
  styleUrls: ['./pacijent-pregledi.component.css']
})
export class PacijentPreglediComponent implements OnInit {

  constructor(private pregledService:PregledService, private izvestajService:IzvestajService, private korService:KorisnikService,private vrPService:VrpregledaService) { }

  ngOnInit(): void {
    //dohvatanje svih pregleda za datog korisnika
    this.pregledService.dohvSveZaKor(JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime).subscribe((data:Pregled[])=>{
      let currentDate = new Date()
      data = data.filter(p=>{
        return new Date(p.datum_vreme)>currentDate
      }).sort((a,b)=> {
        if(a.datum_vreme<b.datum_vreme) return -1;
        else if (b.datum_vreme==a.datum_vreme) return 0;
        else return 1;
      });
      data.forEach(p=>{
        p.datum_formatted = new Date(p.datum_vreme).toLocaleDateString() + " " + new Date(p.datum_vreme).toLocaleTimeString();
        this.korService.dohvKorisnika(p.lekar).subscribe((kor:Korisnik)=>{
          p.l_ime_prezime = kor.ime + " " + kor.prezime;
          p.ogranak = kor.dodatno['ogranak_ordinacije'];
        })
        this.vrPService.dohvVrstu(p.id_vrste).subscribe((vrsta:VrPregleda)=>{
          p.vrsta=vrsta;
        })
      })
      this.pregledi=data;
    })
    //dohvatanje svih izvestaja za datog korisnika
    this.izvestajService.dohvSveZaKor(JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime).subscribe((izv:Izvestaj[])=>{
      izv.sort((a,b)=> {
        if(a.datum_vreme<b.datum_vreme) return 1;
        else if (b.datum_vreme==a.datum_vreme) return 0;
        else return -1;
      });
      izv.forEach(i=>{
        i.datum_formatted = new Date(i.datum_vreme).toLocaleDateString() + " " + new Date(i.datum_vreme).toLocaleTimeString();
        i.prep_formatted = new Date(i.prep_datum).toLocaleDateString() + " " + new Date(i.prep_datum).toLocaleTimeString();
        this.korService.dohvKorisnika(i.lekar).subscribe((lekar:Korisnik)=>{
          i.l_ime_prezime = lekar.ime + " " + lekar.prezime;
          i.specijalizacija = lekar.dodatno['specijalizacija'];
        })
      })
        this.izvestaji=izv;
    })
  }

  pregledi:Pregled[] = [];
  izvestaji:Izvestaj[] = [];

  otkazi_pregled(p){
    this.pregledService.otkazi(p.id).subscribe((resp)=>{
      alert(resp['msg']);
      this.ngOnInit();
    })
  }

  generisiPDF(i:Izvestaj){
    let content = 
    "Datum: "+i.datum_formatted+"\n"+
    "Lekar: "+i.l_ime_prezime +"\n"+
    "Specijalizacija: " + i.specijalizacija+ "\n"+
    "Razlog dolaska: " + i.razlog_dolaska +"\n"+
    "Dijagnoza: "+i.dijagnoza+"\n"+
    "Preporucena terapija: "+i.prep_terapija+"\n"+
    "Preporuceni datum narednog pregleda: " + i.prep_formatted+"\n";

    this.korService.generatePDF('izvestaj'+i.id,"Izvestaj sa pregleda",content).subscribe(resp=>{
      alert('Uspesno generisano');
      this.ngOnInit();
    })
  }
}
