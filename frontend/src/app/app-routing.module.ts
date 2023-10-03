import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { LoginComponent } from './login/login.component';
import { PacijentComponent } from './pacijent/pacijent.component';
import { LekarComponent } from './lekar/lekar.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { MenadzerLoginComponent } from './menadzer-login/menadzer-login.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { AuthGuardService } from './services/auth-guard.service';
import { PacijentPreglediComponent } from './pacijent-pregledi/pacijent-pregledi.component';
import { PacijentLekariComponent } from './pacijent-lekari/pacijent-lekari.component';
import { PacijentObavestenjaComponent } from './pacijent-obavestenja/pacijent-obavestenja.component';
import { PacijentLekarInfoComponent } from './pacijent-lekar-info/pacijent-lekar-info.component';
import { PacijentZakazivanjeComponent } from './pacijent-zakazivanje/pacijent-zakazivanje.component';
import { PacijentAzurirajComponent } from './pacijent-azuriraj/pacijent-azuriraj.component';
import { LekarPreglediComponent } from './lekar-pregledi/lekar-pregledi.component';
import { LekarAzurirajComponent } from './lekar-azuriraj/lekar-azuriraj.component';
import { LekarRaznoComponent } from './lekar-razno/lekar-razno.component';
import { LekarKartonComponent } from './lekar-karton/lekar-karton.component';
import { LekarUnosIzvestajaComponent } from './lekar-unos-izvestaja/lekar-unos-izvestaja.component';
import { MenadzerKorisniciComponent } from './menadzer-korisnici/menadzer-korisnici.component';
import { MenadzerKorisniciDetaljnijeComponent } from './menadzer-korisnici-detaljnije/menadzer-korisnici-detaljnije.component';
import { MenadzerKorisniciAzurirajComponent } from './menadzer-korisnici-azuriraj/menadzer-korisnici-azuriraj.component';
import { MenadzerDodajLekaraComponent } from './menadzer-dodaj-lekara/menadzer-dodaj-lekara.component';
import { MenadzerPreglediComponent } from './menadzer-pregledi/menadzer-pregledi.component';
import { MenadzerAzurirajVrstuPregledaComponent } from './menadzer-azuriraj-vrstu-pregleda/menadzer-azuriraj-vrstu-pregleda.component';
import { MenadzerDodajNovuVrstuComponent } from './menadzer-dodaj-novu-vrstu/menadzer-dodaj-novu-vrstu.component';
import { MenadzerZahteviComponent } from './menadzer-zahtevi/menadzer-zahtevi.component';
import { PacijentObavestenjaDetaljnijeComponent } from './pacijent-obavestenja-detaljnije/pacijent-obavestenja-detaljnije.component';
import { LekarOtkazivanjeComponent } from './lekar-otkazivanje/lekar-otkazivanje.component';
import { MenadzerPromocijeComponent } from './menadzer-promocije/menadzer-promocije.component';

const routes: Routes = [
  {path:'', component:PocetnaComponent},
  {path:'login', component:LoginComponent},
  {path:'pacijent', component:PacijentComponent, canActivate: [AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'lekar', component:LekarComponent, canActivate: [AuthGuardService],data:{ expectedRole: 'lekar' }},
  {path:'registracija', component:RegistracijaComponent},
  {path:'menadzer-login', component:MenadzerLoginComponent},
  {path:'promena-lozinke',component:PromenaLozinkeComponent, canActivate: [AuthGuardService]},
  {path:'pacijent-pregledi', component:PacijentPreglediComponent, canActivate: [AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'pacijent-lekari', component:PacijentLekariComponent, canActivate: [AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'pacijent-obavestenja', component:PacijentObavestenjaComponent, canActivate: [AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'pacijent-lekar-info', component:PacijentLekarInfoComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'pacijent-zakazivanje', component:PacijentZakazivanjeComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'pacijent-azuriraj', component:PacijentAzurirajComponent,canActivate:[AuthGuardService],data:{ expectedRole: 'pacijent' }},
  {path:'lekar-pregledi', component:LekarPreglediComponent,canActivate:[AuthGuardService],data:{ expectedRole: 'lekar' }},
  {path:'lekar-azuriraj', component:LekarAzurirajComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'lekar' }},
  {path:'lekar-razno', component:LekarRaznoComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'lekar' }},
  {path:'lekar-karton',component:LekarKartonComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'lekar' }},
  {path:'lekar-unos-izvestaja',component:LekarUnosIzvestajaComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'lekar' }},
  {path:'menadzer-korisnici',component:MenadzerKorisniciComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-zahtevi',component:MenadzerZahteviComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-korisnici-detaljnije',component:MenadzerKorisniciDetaljnijeComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-korisnici-azuriraj',component:MenadzerKorisniciAzurirajComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-dodaj-lekara',component:MenadzerDodajLekaraComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-pregledi',component:MenadzerPreglediComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-azuriraj-vrstu-pregleda',component:MenadzerAzurirajVrstuPregledaComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-dodaj-novu-vrstu',component:MenadzerDodajNovuVrstuComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer',component:MenadzerKorisniciComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'menadzer-promocije',component:MenadzerPromocijeComponent, canActivate:[AuthGuardService],data:{ expectedRole: 'menadzer' }},
  {path:'pacijent-obavestenja-detaljnije',component:PacijentObavestenjaDetaljnijeComponent, canActivate:[AuthGuardService],data:{expectedRole:'pacijent'}},
  {path:'lekar-otkazivanje', component:LekarOtkazivanjeComponent,canActivate:[AuthGuardService],data:{ expectedRole: 'lekar' }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
