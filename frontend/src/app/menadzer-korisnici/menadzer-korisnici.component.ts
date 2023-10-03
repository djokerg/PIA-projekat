import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { KorisnikService } from '../services/korisnik.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menadzer-korisnici',
  templateUrl: './menadzer-korisnici.component.html',
  styleUrls: ['./menadzer-korisnici.component.css']
})
export class MenadzerKorisniciComponent implements OnInit {

  @ViewChild('confirmationDialog') confirmationDialog: TemplateRef<any>;

  constructor(private korService:KorisnikService,public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.korService.dohvKorisnike().subscribe((kor:Korisnik[])=>{
      this.korisnici=kor.filter(k=>k.tip!='menadzer' &&k.prihvacen==true);
    })
  }

  korisnici:Korisnik[]=[]

  obrisi(k){
    const dialogRef = this.dialog.open(this.confirmationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.korService.obrisiKorisnika(k.korisnicko_ime).subscribe(resp=>{
          if(resp['msg']=='ok'){
            if(k.profilna_slika!='default-avatar.png'){
              this.korService.obrisiSliku(k.profilna_slika).subscribe(resp=>{
                this.korisnici=[];
                this.ngOnInit();
              })
            }
          }
        })
      } else {
        // User clicked "Cancel" or closed the dialog
      }
    });
    
  }

  detaljnije(k){
    localStorage.setItem("izabrani_korisnik",JSON.stringify(k));
    this.router.navigate(['menadzer-korisnici-detaljnije'])
  }

  dodajlekara(){
    this.router.navigate(['menadzer-dodaj-lekara']);
  }
}
