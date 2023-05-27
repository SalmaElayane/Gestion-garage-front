import { TestBed } from '@angular/core/testing';

import { UpdatetacheService } from './updatetache.service';

describe('UpdatetacheService', () => {
  let service: UpdatetacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatetacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
