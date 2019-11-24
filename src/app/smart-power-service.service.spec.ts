import { TestBed } from '@angular/core/testing';

import { SmartPowerServiceService } from './smart-power-service.service';

describe('SmartPowerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SmartPowerServiceService = TestBed.get(SmartPowerServiceService);
    expect(service).toBeTruthy();
  });
});
