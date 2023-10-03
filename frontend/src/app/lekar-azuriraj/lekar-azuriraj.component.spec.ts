import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarAzurirajComponent } from './lekar-azuriraj.component';

describe('LekarAzurirajComponent', () => {
  let component: LekarAzurirajComponent;
  let fixture: ComponentFixture<LekarAzurirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarAzurirajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekarAzurirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
