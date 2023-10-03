import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLekarComponent } from './header-lekar.component';

describe('HeaderLekarComponent', () => {
  let component: HeaderLekarComponent;
  let fixture: ComponentFixture<HeaderLekarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLekarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLekarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
