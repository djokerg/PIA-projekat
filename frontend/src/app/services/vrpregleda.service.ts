import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VrpregledaService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/vr-pregleda";

  dohvSve() {
    return this.http.get(`${this.uri}/dohvSve`)
  }

  dohvVrstu(id){
    let data = {
      id:id
    }
    return this.http.post(`${this.uri}/dohvVrstu`,data);
  }

  dodajLekara(kor_ime, id_vr){
    let data = {
      kor_ime:kor_ime,
      id_vr:id_vr
    }
    return this.http.post(`${this.uri}/dodajLekara`,data);
  }

  dodajNovu(naziv,cena,trajanje,lekari,prihvacena,odbijena,obrisana,spec){
    let data = {
      naziv:naziv,
      cena:cena,
      trajanje:trajanje,
      lekari:lekari,
      prihvacena:prihvacena,
      odbijena:odbijena,
      obrisana:obrisana,
      spec:spec
    }
    return this.http.post(`${this.uri}/dodajNovu`,data);
  }

  azuriraj(vrp){
    let data = {
      id:vrp.id,
      naziv:vrp.naziv,
      cena:vrp.cena,
      trajanje:vrp.trajanje,
      prihvacena:vrp.prihvacena,
      odbijena:vrp.odbijena,
      obrisana:vrp.obrisana
    }
    return this.http.post(`${this.uri}/azuriraj`,data);
  }
}
