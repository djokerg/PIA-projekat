import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentObavestenjaDetaljnijeComponent } from './pacijent-obavestenja-detaljnije.component';

describe('PacijentObavestenjaDetaljnijeComponent', () => {
  let component: PacijentObavestenjaDetaljnijeComponent;
  let fixture: ComponentFixture<PacijentObavestenjaDetaljnijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacijentObavestenjaDetaljnijeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacijentObavestenjaDetaljnijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
