import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private korService:KorisnikService, private router:Router) { }

  ngOnInit(): void {
    this.kor=JSON.parse(localStorage.getItem("ulogovan"));
  }
  kor:Korisnik;
  error_8:boolean = false;
  error_14:boolean = false;
  error_vs:boolean = false;
  error_broj:boolean = false;
  error_spec:boolean = false;
  error_susedni:boolean = false;
  error_pocetno_slovo:boolean = false;
  error_kor_ime:boolean = false;
  error_mejl:boolean =false;
  error_potvrda:boolean = false;

  lozinka:string;
  stara:string;
  potvrda_lozinke:string;
  msg:string;

  proveri_lozinku(){
    this.error_8 = false;
    this.error_14 = false;
    this.error_broj = false;
    this.error_spec = false;
    this.error_vs = false;
    this.error_pocetno_slovo = false;
    this.error_susedni= false;

    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~`\-=/\\|]/;
    if(this.lozinka.length<8) this.error_8 = true;
    if(this.lozinka.length>14) this.error_14 = true;
    if(!/[A-Z]/.test(this.lozinka)) this.error_vs=true;
    if(!regex.test(this.lozinka)) this.error_spec=true;
    if(!/\d/.test(this.lozinka)) this.error_broj=true;
    if(!/[A-Za-z]/.test(this.lozinka[0])) this.error_pocetno_slovo = true;
    for(let i = 0;i < this.lozinka.length-1;i++){
      if(this.lozinka.length>1){
        if(this.lozinka[i]==this.lozinka[i+1]) this.error_susedni=true;
      }
    }
  }

  proveri_potvrdu_lozinke(){
    if(this.lozinka==this.potvrda_lozinke){
      this.error_potvrda=false;
    }
    else{
      this.error_potvrda=true;
    }
  }

  potvrdi(){
    if(!this.lozinka || !this.stara || !this.potvrda_lozinke){
      this.msg= "Niste uneli sve podatke";
      return;
    }
    this.msg = "";
    if(this.error_8 ||this.error_14 || this.error_broj || this.error_kor_ime || this.error_mejl || this.error_pocetno_slovo
      || this.error_potvrda || this.error_spec || this.error_susedni || this.error_vs) {
      return;
    }
    this.msg = "";  
    let korisnik = JSON.parse(localStorage.getItem("ulogovan"));
    if(this.stara!=korisnik.lozinka){
      this.msg="Uneli ste pogresnu lozinku";
      return;
    }
    this.msg = "";
    this.korService.promeniLozinku(korisnik.korisnicko_ime, this.lozinka).subscribe(resp=>{
      alert(resp['msg']);
      localStorage.clear();
      this.router.navigate(['']);
    })

  }
}
