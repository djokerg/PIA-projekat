import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';
import { Specijalizacija } from '../models/specijalizacija';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';

@Component({
  selector: 'app-menadzer-dodaj-lekara',
  templateUrl: './menadzer-dodaj-lekara.component.html',
  styleUrls: ['./menadzer-dodaj-lekara.component.css']
})
export class MenadzerDodajLekaraComponent implements OnInit {

  constructor(private router:Router,private korService:KorisnikService,private specService:SpecijalizaciijaService) { }

  ngOnInit(): void {
    this.korService.dohvKorisnike().subscribe((data:Korisnik[])=>{
      this.korisnici=data;
    })
    this.specService.dohvSveSpec().subscribe((data:Specijalizacija[])=>{
      this.sveSpec=data;
    })
  }

  korisnici:Korisnik[] = []

  korisnicko_ime:string;
  lozinka:string;
  potvrda_lozinke:string;
  ime:string;
  prezime:string;
  adresa:string;
  br_telefona:number;
  imejl:string;
  msg:string;
  broj_licence:number;
  specijalizacija:number;
  ogranak_ordinacije:string;
  sveSpec:Specijalizacija[] = [];
  
  registracija(){
    if(!this.korisnicko_ime || !this.lozinka || !this.potvrda_lozinke || !this.ime || !this.prezime || !this.adresa || !this.br_telefona
      || !this.imejl || !this.broj_licence || !this.specijalizacija || !this.ogranak_ordinacije){
        this.msg= "Niste uneli sve podatke";
        return;
      }
      this.picture_error = "";
      this.msg = "";
    if(this.error_8 ||this.error_14 || this.error_broj || this.error_kor_ime || this.error_mejl || this.error_pocetno_slovo
      || this.error_potvrda || this.error_spec || this.error_susedni || this.error_vs || this.format_mejla_error()) {
        return;
      }
      this.msg = "";
    if(this.selectedFile){
      const img = new Image();
      img.src = URL.createObjectURL(this.selectedFile);
      img.onload = () => {
      if (img.width < 100 || img.width > 300 || img.height < 100 || img.height > 300) {
        this.picture_error = 'Dimenzije fotografije nisu u dozvoljenom opsegu (100x100 ->300x300)';
      } else {
        this.korService.otpremi(this.selectedFile).subscribe((resp)=>{
          if(resp['msg']=='ok'){
            alert('Uspesno otpremljeno')
            this.profilna=resp['filePath'];
            this.korService.registracija(this.korisnicko_ime, this.lozinka,this.ime,this.prezime,this.adresa,this.br_telefona,this.imejl,'lekar',{broj_licence:this.broj_licence,specijalizacija:this.specijalizacija,ogranak_ordinacije:this.ogranak_ordinacije, slobodni_dani:[]},this.profilna ? this.profilna:"default-avatar.png",true, false).subscribe(resp=>{
              alert("Uspesno dodavanje novog lekara");
              this.router.navigate(['menadzer-korisnici']);
            })
          }
        })
      }
    };
    }else{
      this.korService.registracija(this.korisnicko_ime, this.lozinka,this.ime,this.prezime,this.adresa,this.br_telefona,this.imejl,'lekar',{broj_licence:this.broj_licence,specijalizacija:this.specijalizacija,ogranak_ordinacije:this.ogranak_ordinacije, slobodni_dani:[]},this.profilna ? this.profilna:"default-avatar.png",true, false).subscribe(resp=>{
        alert("Uspesno dodavanje novog lekara");
        this.router.navigate(['menadzer-korisnici']);
      })
    }
  }

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
  error_kor_ime_o:boolean=false;
  error_mejl_o:boolean=false;
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

  proveri_kor_ime(){
    this.error_kor_ime = false;
    this.error_kor_ime_o=false;
    this.korisnici.forEach(k=>{
      if(k.korisnicko_ime==this.korisnicko_ime && k.odbijen){
        this.error_kor_ime_o= true;
      }else if(k.korisnicko_ime==this.korisnicko_ime && k.prihvacen){
        this.error_kor_ime=true;
      }
    })
  }

  proveri_mejl(){
    this.error_mejl = false;
    this.error_mejl_o=false;
    this.korisnici.forEach(k=>{
      if(k.imejl==this.imejl && k.odbijen){
        this.error_mejl_o= true;
      }else if(k.imejl==this.imejl && k.odbijen){
        this.error_mejl=true;
      }
    })
  }

  format_mejla_error(): boolean{
    return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.imejl);
  }
  selectedFile:File;
  picture_error:string = "";
  profilna:string;
  preview: string | ArrayBuffer | null = null;
  handleFile(event:any){
    this.selectedFile = event.target.files[0];
    this.picture_error = "";
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.preview = reader.result;
      };
  }

}
