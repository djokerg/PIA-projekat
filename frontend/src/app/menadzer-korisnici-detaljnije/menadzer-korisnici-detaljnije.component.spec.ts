import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerKorisniciDetaljnijeComponent } from './menadzer-korisnici-detaljnije.component';

describe('MenadzerKorisniciDetaljnijeComponent', () => {
  let component: MenadzerKorisniciDetaljnijeComponent;
  let fixture: ComponentFixture<MenadzerKorisniciDetaljnijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerKorisniciDetaljnijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerKorisniciDetaljnijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
