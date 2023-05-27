import { TestBed } from '@angular/core/testing';

import { AddnotificationService } from './addnotification.service';

describe('AddnotificationService', () => {
  let service: AddnotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddnotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
