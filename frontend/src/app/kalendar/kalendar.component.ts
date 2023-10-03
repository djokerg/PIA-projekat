import { AfterViewInit, Component, ViewChild, Input } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction';
import { MatDialog } from '@angular/material/dialog';
import { Pregled } from '../models/pregled';
import { Korisnik } from '../models/korisnik';
import { PregledService } from '../services/pregled.service';
import { VrpregledaService } from '../services/vrpregleda.service';
import { VrPregleda } from '../models/vr-pregleda';

@Component({
  selector: 'app-kalendar',
  templateUrl: './kalendar.component.html',
  styleUrls: ['./kalendar.component.css']
})
export class KalendarComponent implements AfterViewInit {

  constructor(private dialog: MatDialog,private pregledService:PregledService,private vrPService:VrpregledaService) {}

  @ViewChild('fullCalendar') fullCalendar: any;
  pregledi:Pregled[];
  lekar:Korisnik;

  ngAfterViewInit(): void {
    this.lekar=JSON.parse(localStorage.getItem("ulogovan"));
    this.pregledService.dohvSve().subscribe((data:Pregled[])=>{
      this.pregledi=data;
      this.pregledi.forEach(p=>{
        this.vrPService.dohvVrstu(p.id_vrste).subscribe((vrsta:VrPregleda)=>{
          let nextWeek= new Date();
          nextWeek.setDate(new Date().getDate()+(14-new Date().getDay()));
          let krajZakazanog = new Date(new Date(p.datum_vreme).getTime() + vrsta.trajanje * 60000);
          if(p.lekar==this.lekar.korisnicko_ime && new Date(p.datum_vreme)<nextWeek && new Date()<=krajZakazanog){
            const newEvent = {
              title: vrsta?.naziv + "-" + vrsta?.trajanje + " min",
              start: new Date(p.datum_vreme)
            };
            this.fullCalendar.getApi().addEvent(newEvent);
          }
        })
        
      })
    })
    let array:Array<Date> = this.lekar.dodatno['slobodni_dani'];
    array.forEach(d=>{
      const newEvent = {
        title: "Slobodan dan",
        start: d
      };
      this.fullCalendar.getApi().addEvent(newEvent);
    })
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth', // Use 'dayGridMonth' for the month view
    plugins: [dayGridPlugin, interactionPlugin], // Include the plugins here
    dateClick: this.handleDateClick.bind(this),
    events: [],
    firstDay: 1
  };

  handleDateClick(info) {
    
  }
  
  
}
