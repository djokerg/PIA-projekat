import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerLoginComponent } from './menadzer-login.component';

describe('MenadzerLoginComponent', () => {
  let component: MenadzerLoginComponent;
  let fixture: ComponentFixture<MenadzerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
