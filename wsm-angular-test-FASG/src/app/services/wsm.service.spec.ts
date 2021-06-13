import { TestBed } from '@angular/core/testing';

import { WSMService } from './wsm.service';

describe('WSMService', () => {
  let service: WSMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WSMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
