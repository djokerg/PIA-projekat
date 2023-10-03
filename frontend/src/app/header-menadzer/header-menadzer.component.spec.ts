import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenadzerComponent } from './header-menadzer.component';

describe('HeaderMenadzerComponent', () => {
  let component: HeaderMenadzerComponent;
  let fixture: ComponentFixture<HeaderMenadzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderMenadzerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMenadzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
