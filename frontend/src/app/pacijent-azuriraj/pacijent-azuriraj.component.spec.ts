import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentAzurirajComponent } from './pacijent-azuriraj.component';

describe('PacijentAzurirajComponent', () => {
  let component: PacijentAzurirajComponent;
  let fixture: ComponentFixture<PacijentAzurirajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacijentAzurirajComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacijentAzurirajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
