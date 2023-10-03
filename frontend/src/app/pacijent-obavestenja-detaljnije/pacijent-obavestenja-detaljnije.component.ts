import { Component, OnInit } from '@angular/core';
import { Obavestenje } from '../models/obavestenje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacijent-obavestenja-detaljnije',
  templateUrl: './pacijent-obavestenja-detaljnije.component.html',
  styleUrls: ['./pacijent-obavestenja-detaljnije.component.css']
})
export class PacijentObavestenjaDetaljnijeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.obavestenje=JSON.parse(localStorage.getItem("izabrano_o"));
  }

  obavestenje:Obavestenje;

  nazad(){
    this.router.navigate(['pacijent-obavestenja']);
  }
}
