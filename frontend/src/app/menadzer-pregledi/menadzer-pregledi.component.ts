import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Specijalizacija } from '../models/specijalizacija';
import { SpecijalizaciijaService } from '../services/specijalizaciija.service';
import { VrpregledaService } from '../services/vrpregleda.service';
import { VrPregleda } from '../models/vr-pregleda';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-menadzer-pregledi',
  templateUrl: './menadzer-pregledi.component.html',
  styleUrls: ['./menadzer-pregledi.component.css']
})
export class MenadzerPreglediComponent implements OnInit {

  @ViewChild('confirmationDialog') confirmationDialog: TemplateRef<any>;
  constructor(public dialog: MatDialog,private specService:SpecijalizaciijaService,private vrpService:VrpregledaService,private router:Router) { }

  ngOnInit(): void {
    this.specService.dohvSveSpec().subscribe((spec:Specijalizacija[])=>{
      spec.forEach(s=>{
        s.vrste_pregleda=new Array<VrPregleda>();
        s.id_vr_pregleda.forEach(vrp=>{
          this.vrpService.dohvVrstu(vrp).subscribe((vrsta:VrPregleda)=>{
            if(vrsta.prihvacena && !vrsta.obrisana) s.vrste_pregleda.push(vrsta);
          })
        })
      })
      this.specijalizacije=spec;
    })
  }

  specijalizacije:Specijalizacija[];

  selectedItemIndex: number | null = null;

  toggleSubTable(index: number) {
    if (this.selectedItemIndex === index) {
      this.selectedItemIndex = null;
    } else {
      this.selectedItemIndex = index;
    }
  }

  dodajPregled(s){
    localStorage.setItem("izabrana_spec",JSON.stringify(s));
    this.router.navigate(['menadzer-dodaj-novu-vrstu']);
  }

  dodajSpec(){
    this.dodavanjeSpec=!this.dodavanjeSpec;
  }
  dodavanjeSpec:boolean=false;
  nazivSpec:string;

  potvrdiSpec(){
    if(!this.nazivSpec){
      return;
    }
    this.specService.dodajSpec(this.nazivSpec,new Array<number>).subscribe((resp)=>{
      
      this.ngOnInit();
      this.dodavanjeSpec=false;
      this.nazivSpec="";
    })
  }

  azuriraj(p){
    localStorage.setItem("izabrana_vrsta",JSON.stringify(p));
    this.router.navigate(['menadzer-azuriraj-vrstu-pregleda']);
  }

  obrisi(p){
    const dialogRef = this.dialog.open(this.confirmationDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        //brisanje pregleda p, samo ne mogu da se zakazu novi pregledi sa tim
        p.obrisana=true;
        this.vrpService.azuriraj(p).subscribe(resp=>{
          this.ngOnInit();
        })
      } else {
        // User clicked "Cancel" or closed the dialog
      }
    });
  }

}
