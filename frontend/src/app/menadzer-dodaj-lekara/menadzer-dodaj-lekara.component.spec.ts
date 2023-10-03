import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerDodajLekaraComponent } from './menadzer-dodaj-lekara.component';

describe('MenadzerDodajLekaraComponent', () => {
  let component: MenadzerDodajLekaraComponent;
  let fixture: ComponentFixture<MenadzerDodajLekaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerDodajLekaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerDodajLekaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
