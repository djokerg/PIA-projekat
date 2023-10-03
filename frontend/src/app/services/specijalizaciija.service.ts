import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecijalizaciijaService {

  constructor(private http: HttpClient) { }

  uri = "http://localhost:4000/specijalizacija";

  dohvSpec(spec) {
    let data = {
      naziv:spec
    }
    return this.http.post(`${this.uri}/dohvSpec`, data);
  }

  dohvSveSpec(){
    return this.http.get(`${this.uri}/dohvSveSpec`);
  }

  dodajSpec(naziv, id_vr_pregleda){
    let data = {
      naziv:naziv,
      id_vr_pregleda:id_vr_pregleda
    }
    return this.http.post(`${this.uri}/dodajSpec`,data);
  }
}
