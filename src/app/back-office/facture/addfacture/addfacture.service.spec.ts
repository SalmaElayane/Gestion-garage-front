import { TestBed } from '@angular/core/testing';

import { AddfactureService } from './addfacture.service';

describe('AddfactureService', () => {
  let service: AddfactureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddfactureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
