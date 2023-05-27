import { TestBed } from '@angular/core/testing';

import { AddmaintenenceService } from './addmaintenence.service';

describe('AddmaintenenceService', () => {
  let service: AddmaintenenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddmaintenenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
