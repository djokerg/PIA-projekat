import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/korisnici";

  login(username: string, password: string) {
    let data = {
      korisnicko_ime: username, lozinka: password
    }
    return this.http.post(`${this.uri}/login`, data)
  }

  registracija(korisnicko_ime, lozinka, ime, prezime, adresa, br_telefona, imejl, tip, dodatno, profilna_slika, prihvacen, odbijen){
    let data = {
      korisnicko_ime:korisnicko_ime,
      lozinka:lozinka,
      ime:ime,
      prezime:prezime,
      adresa:adresa,
      br_telefona:br_telefona,
      imejl:imejl,
      tip:tip,
      dodatno:dodatno,
      profilna_slika:profilna_slika,
      prihvacen:prihvacen,
      odbijen:odbijen
    }
    return this.http.post(`${this.uri}/registracija`, data);
  }

  dohvKorisnike(){
    return this.http.get(`${this.uri}/dohvKorisnike`);
  }

  otpremi(selectedFile: File){
    let formData = new FormData();
    formData.append('image', selectedFile);
    return this.http.post(`${this.uri}/otpremi`, formData);
  }

  promeniLozinku(kor_ime, nova){
    let data = {
      kor_ime: kor_ime, nova:nova
    }
    return this.http.post(`${this.uri}/promeniLozinku`, data);
  }

  dohvKorisnika(kor_ime){
    let data = {
      kor_ime: kor_ime
    }
    return this.http.post(`${this.uri}/dohvKorisnika`, data);
  }


  azuriraj(k){
    let data = {
      k:k
    } 
    return this.http.post(`${this.uri}/azuriraj`, data);
  }

  obrisiSliku(filename){
    let data = {
      filename:filename
    } 
    return this.http.post(`${this.uri}/obrisiSliku`, data);
  }

  obrisiKorisnika(korisnicko_ime){
    let data = {
      korisnicko_ime:korisnicko_ime
    } 
    return this.http.post(`${this.uri}/obrisiKorisnika`, data);
  }

  async dodajSlobodan(korisnicko_ime,slobodan){
    let data = {
      kor_ime:korisnicko_ime,
      slobodan:slobodan
    } 
    await this.http.post(`${this.uri}/dodajSlobodan`, data).toPromise();
  }

  generatePDF(name, title,content){
    let data = {
      name:name,
      title:title,
      content:content
    } 
    return this.http.post(`${this.uri}/generatePDF`, data);
  }
}
