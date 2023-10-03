import { Component, OnInit } from '@angular/core';
import { VrpregledaService } from '../services/vrpregleda.service';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';
import { Specijalizacija } from '../models/specijalizacija';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menadzer-dodaj-novu-vrstu',
  templateUrl: './menadzer-dodaj-novu-vrstu.component.html',
  styleUrls: ['./menadzer-dodaj-novu-vrstu.component.css']
})
export class MenadzerDodajNovuVrstuComponent implements OnInit {

  constructor(private vrPService:VrpregledaService,private specService:SpecijalizaciijaService,private router:Router) { }

  ngOnInit(): void {
    this.s=JSON.parse(localStorage.getItem("izabrana_spec"));
  }

  naziv:string;
  trajanje:number;
  cena:number;
  error:string;
  s:Specijalizacija;
  dodaj(){
    if(!this.naziv || !this.cena){
      this.error="Niste uneli sve potrebne podatke";
      return;
    }
    this.error="";
    this.vrPService.dodajNovu(this.naziv,this.cena,this.trajanje? this.trajanje:30,[],true,false,false,this.s.naziv).subscribe(resp=>{
      alert(resp['msg']);
      this.router.navigate(['menadzer-pregledi']);
    })
    
  }

}
