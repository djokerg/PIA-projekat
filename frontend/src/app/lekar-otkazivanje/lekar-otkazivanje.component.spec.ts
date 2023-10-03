import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarOtkazivanjeComponent } from './lekar-otkazivanje.component';

describe('LekarOtkazivanjeComponent', () => {
  let component: LekarOtkazivanjeComponent;
  let fixture: ComponentFixture<LekarOtkazivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarOtkazivanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekarOtkazivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
