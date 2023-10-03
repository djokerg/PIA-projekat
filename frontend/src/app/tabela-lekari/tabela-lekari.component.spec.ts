import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaLekariComponent } from './tabela-lekari.component';

describe('TabelaLekariComponent', () => {
  let component: TabelaLekariComponent;
  let fixture: ComponentFixture<TabelaLekariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaLekariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaLekariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
