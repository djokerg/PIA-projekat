import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LekarKartonComponent } from './lekar-karton.component';

describe('LekarKartonComponent', () => {
  let component: LekarKartonComponent;
  let fixture: ComponentFixture<LekarKartonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LekarKartonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LekarKartonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
