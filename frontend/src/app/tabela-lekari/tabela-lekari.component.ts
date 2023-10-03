import { Component, Input, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-tabela-lekari',
  templateUrl: './tabela-lekari.component.html',
  styleUrls: ['./tabela-lekari.component.css']
})
export class TabelaLekariComponent implements OnInit {

  constructor(private korService:KorisnikService) { }
  sortField: string;
  sortAscending: boolean;
  searched:Korisnik[] = [];
  lekari: Korisnik[] = [];

  ngOnInit() {
    this.korService.dohvKorisnike().subscribe((data:Korisnik[])=>{
      data.forEach(k=>{
        if(k.tip=='lekar' && k.prihvacen==true){
          this.lekari.push(k);
          this.searched.push(k);
        }
      })
    })
    this.sortField = ''; // Initialize with no sorting field selected
    this.sortAscending = true;
    this.sortData();
  }

  sortData() {
    if (!this.sortField) {
      return;
    }

    const multiplier = this.sortAscending ? 1 : -1;

    this.searched.sort((a, b) =>{
      if(this.sortField=='specijalizacija'){
        return a.dodatno['specijalizacija'].localeCompare(b.dodatno['specijalizacija']) * multiplier;
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

  searchData() {
    this.searched=this.lekari.filter( l=>{
      return (!this.ime || l.ime.toLowerCase().includes(this.ime.toLowerCase())) &&
      (!this.prezime || l.prezime.toLowerCase().includes(this.prezime.toLowerCase())) &&
      (!this.specijalizacija || l.dodatno['specijalizacija'].toLowerCase().includes(this.specijalizacija.toLowerCase()))
    });
    if(this.searched.length >0){
      this.rezultati="Pronadjeni su sledeci lekari sa ovim parametrima pretrage"
    }else{
      this.rezultati="Nisu pronadjeni lekari sa ovim parametrima pretrage"
    }
  }

}
