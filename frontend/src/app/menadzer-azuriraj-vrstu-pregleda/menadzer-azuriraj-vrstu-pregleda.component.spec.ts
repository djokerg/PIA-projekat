import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerAzurirajVrstuPregledaComponent } from './menadzer-azuriraj-vrstu-pregleda.component';

describe('MenadzerAzurirajVrstuPregledaComponent', () => {
  let component: MenadzerAzurirajVrstuPregledaComponent;
  let fixture: ComponentFixture<MenadzerAzurirajVrstuPregledaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerAzurirajVrstuPregledaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerAzurirajVrstuPregledaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
