import { TestBed, inject } from '@angular/core/testing';

import { RoleResolver } from './role-resolver.service';

describe('RoleResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleResolver]
    });
  });

  it('should be created', inject([RoleResolver], (service: RoleResolver) => {
    expect(service).toBeTruthy();
  }));
});
