import { TestBed } from '@angular/core/testing';

import { PermitsService } from './permits.service';

describe('PermitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermitsService = TestBed.get(PermitsService);
    expect(service).toBeTruthy();
  });
});
