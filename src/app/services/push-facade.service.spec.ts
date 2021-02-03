import { TestBed } from '@angular/core/testing';

import { PushFacadeService } from './push-facade.service';

describe('PushFacadeService', () => {
  let service: PushFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
