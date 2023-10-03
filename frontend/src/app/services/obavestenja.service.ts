import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObavestenjaService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/obavestenja";

  dohvSveZaKor(kor_ime){
    let data={
      kor_ime:kor_ime
    }
    return this.http.post(`${this.uri}/dohvSveZaKor`, data);
  }

  dodajNovo(naslov,tekst,pacijent,procitano){
    let data={
      naslov:naslov,
      tekst:tekst,
      pacijent:pacijent,
      procitano:procitano
    }
    return this.http.post(`${this.uri}/dodajNovo`, data);
  }

  async dodajNovoAsync(naslov,tekst,pacijent,procitano){
    let data={
      naslov:naslov,
      tekst:tekst,
      pacijent:pacijent,
      procitano:procitano
    }
    await this.http.post(`${this.uri}/dodajNovo`, data).toPromise();
  }

  procitaj(id){
    let data={
      id:id
    }
    return this.http.post(`${this.uri}/procitaj`, data);
  }

  obrisi(id){
    let data={
      id:id
    }
    return this.http.post(`${this.uri}/obrisi`, data);
  }
}
