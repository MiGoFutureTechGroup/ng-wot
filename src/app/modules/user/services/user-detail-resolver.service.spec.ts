import { TestBed, inject } from '@angular/core/testing';

import { UserDetailResolver } from './user-detail-resolver.service';

describe('UserDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailResolver]
    });
  });

  it('should be created', inject([UserDetailResolver], (service: UserDetailResolver) => {
    expect(service).toBeTruthy();
  }));
});
