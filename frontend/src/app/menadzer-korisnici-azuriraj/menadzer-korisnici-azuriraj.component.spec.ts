import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerKorisniciAzurirajComponent } from './menadzer-korisnici-azuriraj.component';

describe('MenadzerKorisniciAzurirajComponent', () => {
  let component: MenadzerKorisniciAzurirajComponent;
  let fixture: ComponentFixture<MenadzerKorisniciAzurirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerKorisniciAzurirajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerKorisniciAzurirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
