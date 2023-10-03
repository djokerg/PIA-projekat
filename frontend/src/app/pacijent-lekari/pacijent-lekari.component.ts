import { Component, OnInit } from '@angular/core';
import { KorisnikService } from '../services/korisnik.service';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';
import { Specijalizacija } from '../models/specijalizacija';

@Component({
  selector: 'app-pacijent-lekari',
  templateUrl: './pacijent-lekari.component.html',
  styleUrls: ['./pacijent-lekari.component.css']
})
export class PacijentLekariComponent implements OnInit {

  constructor(private korService:KorisnikService, private router:Router, private specService:SpecijalizaciijaService) { }

  ngOnInit(): void {
    this.sortField = '';
    this.sortAscending = true;
    this.sortData();
    this.korService.dohvKorisnike().subscribe((data:Korisnik[])=>{
        data=data.filter(k=> k.tip=='lekar' && k.prihvacen);
        this.lekari=data;
        this.searched=data;
      })
  }

  lekari:Korisnik[]=[]

  sortField: string;
  sortAscending: boolean;



  sortData() {
    if (!this.sortField) {
      return;
    }

    const multiplier = this.sortAscending ? 1 : -1;

    this.searched.sort((a, b) =>{
      if(this.sortField=='specijalizacija' || this.sortField=='ogranak_ordinacije'){
        return a.dodatno[this.sortField].localeCompare(b.dodatno[this.sortField]) * multiplier;
      }
      return a[this.sortField].localeCompare(b[this.sortField]) * multiplier
    }
      
      
    );
  }

  toggleSortOrder() {
    this.sortAscending = !this.sortAscending;
    this.sortData();
  }

  sortBy(field: string) {
    if (this.sortField === field) {
      this.toggleSortOrder();
    } else {
      this.sortField = field;
      this.sortAscending = true;
      this.sortData();
    }
  }

  ime:string;
  prezime:string;
  specijalizacija:string;
  rezultati:string;
  searched:Korisnik[] = [];
  ogranak:string;

  searchData() {
    this.searched=this.lekari.filter( l=>{
      return (!this.ime || l.ime.toLowerCase().includes(this.ime.toLowerCase())) &&
      (!this.prezime || l.prezime.toLowerCase().includes(this.prezime.toLowerCase())) &&
      (!this.specijalizacija || l.dodatno['specijalizacija'].toLowerCase().includes(this.specijalizacija.toLowerCase())) &&
      (!this.ogranak || l.dodatno['ogranak_ordinacije'].toLowerCase().includes(this.ogranak.toLowerCase()))
    });
    if(this.searched.length >0){
      this.rezultati="Pronadjeni su sledeci lekari sa ovim parametrima pretrage"
    }else{
      this.rezultati="Nisu pronadjeni lekari sa ovim parametrima pretrage"
    }
  }

  prikaziLekara(l){
    localStorage.setItem("izabrani_lekar", JSON.stringify(l));
    this.router.navigate(['pacijent-lekar-info']);
  }

}
