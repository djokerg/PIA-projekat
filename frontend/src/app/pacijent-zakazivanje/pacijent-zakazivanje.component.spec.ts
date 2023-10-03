import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentZakazivanjeComponent } from './pacijent-zakazivanje.component';

describe('PacijentZakazivanjeComponent', () => {
  let component: PacijentZakazivanjeComponent;
  let fixture: ComponentFixture<PacijentZakazivanjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacijentZakazivanjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacijentZakazivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
