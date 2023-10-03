import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarUnosIzvestajaComponent } from './lekar-unos-izvestaja.component';

describe('LekarUnosIzvestajaComponent', () => {
  let component: LekarUnosIzvestajaComponent;
  let fixture: ComponentFixture<LekarUnosIzvestajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarUnosIzvestajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekarUnosIzvestajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
