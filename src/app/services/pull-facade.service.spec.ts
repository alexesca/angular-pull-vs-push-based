import { TestBed } from '@angular/core/testing';

import { PullFacadeService } from './pull-facade.service';

describe('PullFacadeService', () => {
  let service: PullFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
