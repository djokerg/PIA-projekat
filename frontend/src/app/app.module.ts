import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { LoginComponent } from './login/login.component';
import { PacijentComponent } from './pacijent/pacijent.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistracijaComponent } from './registracija/registracija.component';
import { LekarComponent } from './lekar/lekar.component';
import { MenadzerLoginComponent } from './menadzer-login/menadzer-login.component';
import { PromenaLozinkeComponent } from './promena-lozinke/promena-lozinke.component';
import { TabelaLekariComponent } from './tabela-lekari/tabela-lekari.component';
import { PacijentLekariComponent } from './pacijent-lekari/pacijent-lekari.component';
import { PacijentPreglediComponent } from './pacijent-pregledi/pacijent-pregledi.component';
import { PacijentObavestenjaComponent } from './pacijent-obavestenja/pacijent-obavestenja.component';
import { PacijentLekarInfoComponent } from './pacijent-lekar-info/pacijent-lekar-info.component';
import { PacijentZakazivanjeComponent } from './pacijent-zakazivanje/pacijent-zakazivanje.component';
import { LekarAzurirajComponent } from './lekar-azuriraj/lekar-azuriraj.component';
import { PacijentAzurirajComponent } from './pacijent-azuriraj/pacijent-azuriraj.component';
import { LekarPreglediComponent } from './lekar-pregledi/lekar-pregledi.component';
import { LekarRaznoComponent } from './lekar-razno/lekar-razno.component';
import { HeaderLekarComponent } from './header-lekar/header-lekar.component';
import { HeaderPacijentComponent } from './header-pacijent/header-pacijent.component';
import { LekarKartonComponent } from './lekar-karton/lekar-karton.component';
import { LekarUnosIzvestajaComponent } from './lekar-unos-izvestaja/lekar-unos-izvestaja.component';
import { CarouselModule } from 'ngx-bootstrap/carousel/';
import { MenadzerKorisniciComponent } from './menadzer-korisnici/menadzer-korisnici.component';
import { HeaderMenadzerComponent } from './header-menadzer/header-menadzer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MenadzerKorisniciDetaljnijeComponent } from './menadzer-korisnici-detaljnije/menadzer-korisnici-detaljnije.component';
import { MenadzerKorisniciAzurirajComponent } from './menadzer-korisnici-azuriraj/menadzer-korisnici-azuriraj.component';
import { MenadzerDodajLekaraComponent } from './menadzer-dodaj-lekara/menadzer-dodaj-lekara.component';
import { MenadzerPreglediComponent } from './menadzer-pregledi/menadzer-pregledi.component';
import { MenadzerAzurirajVrstuPregledaComponent } from './menadzer-azuriraj-vrstu-pregleda/menadzer-azuriraj-vrstu-pregleda.component';
import { MenadzerDodajNovuVrstuComponent } from './menadzer-dodaj-novu-vrstu/menadzer-dodaj-novu-vrstu.component';
import { MenadzerZahteviComponent } from './menadzer-zahtevi/menadzer-zahtevi.component';
import { FooterComponent } from './footer/footer.component';
import { KalendarComponent } from './kalendar/kalendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TimePickerDialogComponent } from './time-picker-dialog/time-picker-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { LekarOtkazivanjeComponent } from './lekar-otkazivanje/lekar-otkazivanje.component';
import { PacijentObavestenjaDetaljnijeComponent } from './pacijent-obavestenja-detaljnije/pacijent-obavestenja-detaljnije.component';
import { MenadzerPromocijeComponent } from './menadzer-promocije/menadzer-promocije.component';
@NgModule({
  declarations: [
    AppComponent,
    PocetnaComponent,
    LoginComponent,
    PacijentComponent,
    RegistracijaComponent,
    LekarComponent,
    MenadzerLoginComponent,
    PromenaLozinkeComponent,
    TabelaLekariComponent,
    PacijentLekariComponent,
    PacijentPreglediComponent,
    PacijentObavestenjaComponent,
    PacijentLekarInfoComponent,
    PacijentZakazivanjeComponent,
    LekarAzurirajComponent,
    PacijentAzurirajComponent,
    LekarPreglediComponent,
    LekarRaznoComponent,
    HeaderLekarComponent,
    HeaderPacijentComponent,
    LekarKartonComponent,
    LekarUnosIzvestajaComponent,
    MenadzerKorisniciComponent,
    HeaderMenadzerComponent,
    MenadzerKorisniciDetaljnijeComponent,
    MenadzerKorisniciAzurirajComponent,
    MenadzerDodajLekaraComponent,
    MenadzerPreglediComponent,
    MenadzerAzurirajVrstuPregledaComponent,
    MenadzerDodajNovuVrstuComponent,
    MenadzerZahteviComponent,
    FooterComponent,
    KalendarComponent,
    TimePickerDialogComponent,
    LekarOtkazivanjeComponent,
    PacijentObavestenjaDetaljnijeComponent,
    MenadzerPromocijeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserModule,
    FullCalendarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

