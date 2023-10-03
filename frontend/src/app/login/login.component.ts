import { Component, Input, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';
import { AutentikacijaService } from '../services/autentikacija.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private korService:KorisnikService, private router:Router,private autentikacija:AutentikacijaService) { }

  korisnicko_ime:string ="";
  lozinka:string ="";
  msg:string;
  error:string;

  @Input() menadzer:boolean = false;

  ngOnInit(): void {
  }

  prijava(){
    if (this.korisnicko_ime == "" || this.lozinka == "") {
      this.msg = "Niste uneli sve podatke!";
      return;
    }
    this.msg = "";
    this.error="";
    this.korService.login(this.korisnicko_ime,this.lozinka).subscribe((data: Korisnik)=>{
      if(data){
        if(data.prihvacen && !data.odbijen){
          localStorage.setItem("ulogovan",JSON.stringify(data));
          switch(data.tip){
            case 'pacijent': { 
              this.autentikacija.login('pacijent');
              this.router.navigate(['pacijent']); 
              break;}
            case 'lekar': {
              this.autentikacija.login('lekar');
              this.router.navigate(['lekar']); 
              break;}
            case 'menadzer':{
              if(this.menadzer){
                this.autentikacija.login('menadzer');
                this.router.navigate(['menadzer']);
              }
              else{
                this.msg="Uneli ste pogresno korisnicko ime ili lozinku";
              }
            } 
        }
        }else if(!data.prihvacen && !data.odbijen){
          this.error="Vas zahtev za registracijom je na cekanju"
        }else{
          this.error="Vas zahtev za registracijom je odbijen pa se ne mozete prijaviti"
        }
      }else{
        this.msg="Uneli ste pogresno korisnicko ime ili lozinku";
      }
    })
  }

  registracija(){
    this.router.navigate(['registracija']);
  }
}
