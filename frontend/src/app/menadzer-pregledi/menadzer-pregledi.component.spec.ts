import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerPreglediComponent } from './menadzer-pregledi.component';

describe('MenadzerPreglediComponent', () => {
  let component: MenadzerPreglediComponent;
  let fixture: ComponentFixture<MenadzerPreglediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerPreglediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerPreglediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
