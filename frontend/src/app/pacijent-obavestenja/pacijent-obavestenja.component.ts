import { Component, OnInit } from '@angular/core';
import { Obavestenje } from '../models/obavestenje';
import { ObavestenjaService } from '../services/obavestenja.service';
import { Router } from '@angular/router';
import { PregledService } from '../services/pregled.service';
import { Pregled } from '../models/pregled';
import { VrpregledaService } from '../services/vrpregleda.service';
import { VrPregleda } from '../models/vr-pregleda';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-pacijent-obavestenja',
  templateUrl: './pacijent-obavestenja.component.html',
  styleUrls: ['./pacijent-obavestenja.component.css']
})
export class PacijentObavestenjaComponent implements OnInit {

  constructor(private korService:KorisnikService, private vrpService:VrpregledaService, private pService:PregledService, private obService:ObavestenjaService,private router:Router) { }

  ngOnInit(): void {
    this.pService.dohvSveZaKor(JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime).subscribe((pregledi:Pregled[])=>{
      pregledi=pregledi.filter(p=>{
        return new Date(p.datum_vreme)>new Date() && new Date(p.datum_vreme)<new Date(new Date().getTime()+24*3600*1000)
      })
      pregledi.forEach(p=>{
        this.vrpService.dohvVrstu(p.id_vrste).subscribe((vrsta:VrPregleda)=>{
          this.korService.dohvKorisnika(p.lekar).subscribe((lek:Korisnik)=>{
            let o = new Obavestenje();
            o.id=0;
            o.naslov= 'Podsetnik-' + vrsta.naziv.toLowerCase();
            o.tekst= " Datuma " + new Date(p.datum_vreme).toLocaleDateString() + " " + new Date(p.datum_vreme).toLocaleTimeString() +
            " imate zakazan pregled kod lekara " + lek.ime + " " + lek.prezime + ".\n"+ 
            "Pregled traje " + vrsta.trajanje + " minuta.";
            o.pacijent=JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime;
            o.procitano=false;
            this.obavestenja.push(o);
          })
          
        })
        
      })
    })
    this.obService.dohvSveZaKor(JSON.parse(localStorage.getItem("ulogovan")).korisnicko_ime).subscribe((data:Obavestenje[])=>{
      this.obavestenja=data;
      this.obavestenja.sort((a,b)=>{
        if(a.id<b.id){
          return 1;
        }
        else if(a.id==b.id){
          return 0
        }else{
          return -1;
        }
      })
    })

  }
  obavestenja:Obavestenje[] = [];

  detaljnije(o){
    if(o.id!=0){
      o.procitano=true;
      this.obService.procitaj(o.id).subscribe(resp=>{
        localStorage.setItem("izabrano_o",JSON.stringify(o))
        this.router.navigate(['pacijent-obavestenja-detaljnije']);
      })
    }else{
      o.procitano=true;
      localStorage.setItem("izabrano_o",JSON.stringify(o))
      this.router.navigate(['pacijent-obavestenja-detaljnije']);
    }
  }

  obrisi(o){
    //odraditi ovo
    if(o.id!=0){
      this.obService.obrisi(o.id).subscribe(resp=>{
        this.obavestenja=[];
        this.ngOnInit();
      })
    }else{
      this.obavestenja=this.obavestenja.filter(ob=>ob!=o);
    }
  }
}
