import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenadzerPromocijeComponent } from './menadzer-promocije.component';

describe('MenadzerPromocijeComponent', () => {
  let component: MenadzerPromocijeComponent;
  let fixture: ComponentFixture<MenadzerPromocijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenadzerPromocijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenadzerPromocijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
