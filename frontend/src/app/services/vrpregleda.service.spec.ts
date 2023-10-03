import { TestBed } from '@angular/core/testing';

import { VrpregledaService } from './vrpregleda.service';

describe('VrpregledaService', () => {
  let service: VrpregledaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VrpregledaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
