import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacijentLekarInfoComponent } from './pacijent-lekar-info.component';

describe('PacijentLekarInfoComponent', () => {
  let component: PacijentLekarInfoComponent;
  let fixture: ComponentFixture<PacijentLekarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacijentLekarInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacijentLekarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
