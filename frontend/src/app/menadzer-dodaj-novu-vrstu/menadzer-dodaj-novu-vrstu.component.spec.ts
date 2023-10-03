import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerDodajNovuVrstuComponent } from './menadzer-dodaj-novu-vrstu.component';

describe('MenadzerDodajNovuVrstuComponent', () => {
  let component: MenadzerDodajNovuVrstuComponent;
  let fixture: ComponentFixture<MenadzerDodajNovuVrstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerDodajNovuVrstuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerDodajNovuVrstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
