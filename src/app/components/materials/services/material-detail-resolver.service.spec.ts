import { TestBed, inject } from '@angular/core/testing';

import { MaterialDetailResolverService } from './material-detail-resolver.service';

describe('MaterialDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialDetailResolverService]
    });
  });

  it('should be created', inject([MaterialDetailResolverService], (service: MaterialDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
