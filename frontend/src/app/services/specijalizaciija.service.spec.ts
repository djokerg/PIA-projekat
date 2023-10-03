import { TestBed } from '@angular/core/testing';

import { SpecijalizaciijaService } from './specijalizaciija.service';

describe('SpecijalizaciijaService', () => {
  let service: SpecijalizaciijaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecijalizaciijaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
