import { TestBed, inject } from '@angular/core/testing';

import { BackendsService } from './backends.service';

describe('BackendsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendsService]
    });
  });

  it('should be created', inject([BackendsService], (service: BackendsService) => {
    expect(service).toBeTruthy();
  }));
});
