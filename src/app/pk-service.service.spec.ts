import { TestBed } from '@angular/core/testing';

import { PkServiceService } from './pk-service.service';

describe('PkServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PkServiceService = TestBed.get(PkServiceService);
    expect(service).toBeTruthy();
  });
});
