import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerZahteviComponent } from './menadzer-zahtevi.component';

describe('MenadzerZahteviComponent', () => {
  let component: MenadzerZahteviComponent;
  let fixture: ComponentFixture<MenadzerZahteviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerZahteviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerZahteviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
