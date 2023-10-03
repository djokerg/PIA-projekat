import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { VrpregledaService } from '../services/vrpregleda.service';
import { VrPregleda } from '../models/vr-pregleda';
import { Router } from '@angular/router';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';
import { Specijalizacija } from '../models/specijalizacija';

@Component({
  selector: 'app-pacijent-lekar-info',
  templateUrl: './pacijent-lekar-info.component.html',
  styleUrls: ['./pacijent-lekar-info.component.css']
})
export class PacijentLekarInfoComponent implements OnInit {

  constructor(private vrPregledsService:VrpregledaService, private router:Router,private specService:SpecijalizaciijaService) { }

  ngOnInit(): void {
    this.l=JSON.parse(localStorage.getItem("izabrani_lekar"));
    this.specService.dohvSpec(this.l.dodatno['specijalizacija']).subscribe((spec:Specijalizacija)=>{
      spec.id_vr_pregleda.forEach(vr=>{
        this.vrPregledsService.dohvVrstu(vr).subscribe((data:VrPregleda)=>{
          if(data.prihvacena && !data.obrisana && data.lekari.includes(this.l.korisnicko_ime)){
            this.vrste_pregleda.push(data);
          }
        })
      })
    })
    
  }
  l:Korisnik;
  vrste_pregleda:VrPregleda[] = [];

  zakazi_pregled(p){
    localStorage.setItem("izabrani_pregled",JSON.stringify(p));
    this.router.navigate(['pacijent-zakazivanje']); 
  }
}
