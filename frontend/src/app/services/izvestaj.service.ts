import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzvestajService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/izvestaj";

  dohvSveZaKor(kor_ime){
    let data={
      kor_ime:kor_ime
    }
    return this.http.post(`${this.uri}/dohvSveZaKor`, data);
  }

  dodajNovi(datum_vreme,lekar,razlog_dolaska,dijagnoza,prep_terapija,prep_datum,pacijent){
    let data={
      datum_vreme:datum_vreme,
      lekar:lekar,
      razlog_dolaska:razlog_dolaska,
      dijagnoza:dijagnoza,
      prep_terapija:prep_terapija,
      prep_datum:prep_datum,
      pacijent:pacijent
    }
    return this.http.post(`${this.uri}/dodajNovi`, data);
  }
  
}
