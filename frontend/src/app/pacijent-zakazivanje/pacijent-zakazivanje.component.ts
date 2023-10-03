import { OnInit,AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { VrPregleda } from '../models/vr-pregleda';
import { PregledService } from '../services/pregled.service';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';
import { Pregled } from '../models/pregled';
import { VrpregledaService } from '../services/vrpregleda.service';
import { MatDialog } from '@angular/material/dialog';
import { TimePickerDialogComponent } from '../time-picker-dialog/time-picker-dialog.component';

@Component({
  selector: 'app-pacijent-zakazivanje',
  templateUrl: './pacijent-zakazivanje.component.html',
  styleUrls: ['./pacijent-zakazivanje.component.css']
})
export class PacijentZakazivanjeComponent implements OnInit,AfterViewInit {

  constructor(private dialog: MatDialog,private pregledService:PregledService, private router:Router, private vrPService:VrpregledaService) { }

  ngOnInit(): void {
    this.vrpr=JSON.parse(localStorage.getItem("izabrani_pregled"));
    this.pacijent=JSON.parse(localStorage.getItem("ulogovan"));
    this.pregledService.dohvSve().subscribe((data:Pregled[])=>{
      this.pregledi=data;
      this.pregledi.forEach(p=>{
        this.vrPService.dohvVrstu(p.id_vrste).subscribe((vrsta:VrPregleda)=>{
          p.vrsta=vrsta;
          //for calendar init
          let krajZakazanog = new Date(new Date(p.datum_vreme).getTime() + p.vrsta.trajanje * 60000);
          if(p.lekar==this.lekar.korisnicko_ime && new Date()<=krajZakazanog){
            const newEvent = {
              title: p.vrsta.naziv + "-" + p.vrsta.trajanje + " min",
              start: new Date(p.datum_vreme)
            };
            this.fullCalendar.getApi().addEvent(newEvent);
          }
        })
        
      })
    })
    
  }
  lekar:Korisnik = JSON.parse(localStorage.getItem("izabrani_lekar"));
  slobodni:Array<Date> = this.lekar.dodatno['slobodni_dani'];
  ngAfterViewInit(): void {
    this.slobodni.forEach(d=>{
      const newEvent = {
        title: "Slobodan dan",
        start: d
      };
      this.fullCalendar.getApi().addEvent(newEvent);
    })
  }
  
  nazad(){
    this.router.navigate(['pacijent-lekar-info']);
  }

  datum_vreme:Date;
  vrpr:VrPregleda;
  error:string;
  pacijent:Korisnik;
  pregledi:Pregled[];

  potvrdi(){
    //provera da li je lekar slobodan
    if(!this.datum_vreme){
      this.error="Niste izabrali datum i vreme pregleda";
      return;
    }
    this.error = "";
    if(this.pregledi.length==0){
      this.pregledService.zakazi(this.lekar.korisnicko_ime,this.datum_vreme,this.pacijent.korisnicko_ime,this.vrpr.id).subscribe((resp:Pregled)=>{
        alert('Uspesno zakazan pregled')
        resp.vrsta=this.vrpr;
        this.pregledi.push(resp);
        const newEvent = {
          title: this.vrpr.naziv + "-" + this.vrpr.trajanje + " min",
          start: new Date(this.datum_vreme)
        };
        this.fullCalendar.getApi().addEvent(newEvent);
      })
      return;
    }
    this.pregledi.forEach(p=>{
      let krajZakazanog = new Date(new Date(p.datum_vreme).getTime() + p.vrsta.trajanje * 60000);
      let krajTrenutnog = new Date(new Date(this.datum_vreme).getTime()+ this.vrpr.trajanje * 60000);
      if((new Date(p.datum_vreme)<=krajTrenutnog && new Date(this.datum_vreme) <= krajZakazanog && this.lekar.korisnicko_ime==p.lekar)){
        this.error="Lekar je zauzet u tom terminu, izaberite drugi termin";
      }
    })
    this.slobodni.forEach(s=>{
      if(this.istogaDana(new Date(s),new Date(this.datum_vreme))){
        this.error="Lekar je zauzet u tom terminu, izaberite drugi termin";
      }
    })
    if(this.error==""){
      this.pregledService.zakazi(this.lekar.korisnicko_ime,this.datum_vreme,this.pacijent.korisnicko_ime,this.vrpr.id).subscribe((resp:Pregled)=>{
        alert('Uspesno zakazan pregled');
        resp.vrsta=this.vrpr;
        this.pregledi.push(resp);
        const newEvent = {
          title: this.vrpr.naziv + "-" + this.vrpr.trajanje + " min",
          start: new Date(this.datum_vreme)
        };
        this.fullCalendar.getApi().addEvent(newEvent);
      })
    }
  }

  ///////////KALENDAR////////////
  @ViewChild('fullCalendar') fullCalendar: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Use 'dayGridMonth' for the month view
    plugins: [dayGridPlugin, interactionPlugin], // Include the plugins here
    dateClick: this.handleDateClick.bind(this),
    events: [],
    firstDay: 1
  };

  handleDateClick(info) {
    const dialogRef = this.dialog.open(TimePickerDialogComponent, {
      width: '300px',
    });
  
    dialogRef.afterClosed().subscribe((selectedTime: string) => {
      if (selectedTime) {
        this.error="";
        const selectedDate = info.dateStr;
        const dateTime = `${selectedDate}T${selectedTime}`;
        this.datum_vreme=new Date(dateTime);
        this.potvrdi();
        // Use fullCalendar instead of this.calendarComponent
      }else{

      }
    });
  }

  istogaDana(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }
}
