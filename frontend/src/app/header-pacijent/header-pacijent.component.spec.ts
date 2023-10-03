import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPacijentComponent } from './header-pacijent.component';

describe('HeaderPacijentComponent', () => {
  let component: HeaderPacijentComponent;
  let fixture: ComponentFixture<HeaderPacijentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPacijentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPacijentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
