import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-menadzer-korisnici-azuriraj',
  templateUrl: './menadzer-korisnici-azuriraj.component.html',
  styleUrls: ['./menadzer-korisnici-azuriraj.component.css']
})
export class MenadzerKorisniciAzurirajComponent implements OnInit {

  editedProfile: Korisnik;
  selectedFile:File;
  pic_error:string ="";
  preview: string | ArrayBuffer | null = null;

  constructor(private router: Router,private korService:KorisnikService) {}

  ngOnInit(): void {
    this.editedProfile=JSON.parse(localStorage.getItem("izabrani_korisnik"));
  }
  onPictureChange(event: any) {
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
      reader.onload = () => {
        this.preview = reader.result;
      };
  }

  saveChanges() {
    if(this.selectedFile){
      const img = new Image();
      img.src = URL.createObjectURL(this.selectedFile);
      img.onload = () => {
      if (img.width < 100 || img.width > 300 || img.height < 100 || img.height > 300) {
        this.pic_error = 'Dimenzije fotografije nisu u dozvoljenom opsegu (100x100 ->300x300)';
      }else{
        this.pic_error = "";
        let profilna_slika= this.editedProfile.profilna_slika.slice();
        this.korService.otpremi(this.selectedFile).subscribe(resp=>{
          this.editedProfile.profilna_slika = resp['filePath'];
          if(profilna_slika=='default-avatar.png'){
            this.korService.azuriraj(this.editedProfile).subscribe(resp=>{
              localStorage.setItem("izabrani_korisnik",JSON.stringify(this.editedProfile));
              alert(resp['msg']);
              this.router.navigate(['menadzer-korisnici-detaljnije']);
            })
          }else{
            this.korService.obrisiSliku(profilna_slika).subscribe(resp=>{
              this.korService.azuriraj(this.editedProfile).subscribe(resp=>{
                localStorage.setItem("izabrani_korisnik",JSON.stringify(this.editedProfile));
                alert(resp['msg']);
                this.router.navigate(['menadzer-korisnici-detaljnije']);
              })
            })
          }
          })
        }
      }
    }else{
      this.korService.azuriraj(this.editedProfile).subscribe(resp=>{
        localStorage.setItem("izabrani_korisnik",JSON.stringify(this.editedProfile));
        alert(resp['msg']);
        this.router.navigate(['menadzer-korisnici-detaljnije']);
      })
    }
  }

  otkazi(){
    this.router.navigate(['menadzer-korisnici'])
  }
}
