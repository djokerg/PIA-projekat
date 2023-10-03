import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { KorisnikService } from '../services/korisnik.service';

@Component({
  selector: 'app-pacijent-azuriraj',
  templateUrl: './pacijent-azuriraj.component.html',
  styleUrls: ['./pacijent-azuriraj.component.css']
})
export class PacijentAzurirajComponent implements OnInit {

  editedProfile: Korisnik;
  selectedFile:File;
  pic_error:string ="";
  preview: string | ArrayBuffer | null = null;

  constructor(private router: Router,private korService:KorisnikService,) {}

  ngOnInit(): void {
    this.editedProfile=JSON.parse(localStorage.getItem("ulogovan"));
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
              localStorage.setItem("ulogovan",JSON.stringify(this.editedProfile));
              alert(resp['msg']);
              this.router.navigate(['/lekar']);
            })
          }else{
            this.korService.obrisiSliku(profilna_slika).subscribe(resp=>{
              this.korService.azuriraj(this.editedProfile).subscribe(resp=>{
                localStorage.setItem("ulogovan",JSON.stringify(this.editedProfile));
                alert(resp['msg']);
                this.router.navigate(['/pacijent']);
              })
            })
          }
          })
        }
      }
    }else{
      this.korService.azuriraj(this.editedProfile).subscribe(resp=>{
        localStorage.setItem("ulogovan",JSON.stringify(this.editedProfile));
        alert(resp['msg']);
        this.router.navigate(['/pacijent']);
      })
    }
  }

  otkazi(){
    this.router.navigate(['pacijent']);
  }

}
