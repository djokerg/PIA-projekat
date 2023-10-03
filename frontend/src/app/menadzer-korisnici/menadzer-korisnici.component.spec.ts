import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerKorisniciComponent } from './menadzer-korisnici.component';

describe('MenadzerKorisniciComponent', () => {
  let component: MenadzerKorisniciComponent;
  let fixture: ComponentFixture<MenadzerKorisniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerKorisniciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
