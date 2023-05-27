import { TestBed } from '@angular/core/testing';

import { AddtacheService } from './addtache.service';

describe('AddtacheService', () => {
  let service: AddtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
