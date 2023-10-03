import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PregledService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/pregled";

  dohvSve() {
    return this.http.get(`${this.uri}/dohvSve`)
  }

  zakazi(lekar, datum_vreme,pacijent,id_vrste){
    let data = {
      lekar:lekar,
      datum_vreme:datum_vreme,
      pacijent:pacijent,
      id_vrste:id_vrste
    }
    return this.http.post(`${this.uri}/zakazi`, data);
  }

  dohvSveZaKor(kor_ime){
    let data={
      kor_ime:kor_ime
    }
    return this.http.post(`${this.uri}/dohvSveZaKor`, data);
  }

  otkazi(id){
    let data={
      id:id
    }
    return this.http.post(`${this.uri}/otkazi`, data);
  }

}
