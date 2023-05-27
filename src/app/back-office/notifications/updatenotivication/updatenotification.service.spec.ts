import { TestBed } from '@angular/core/testing';

import { UpdatenotificationService } from './updatenotification.service';

describe('UpdatenotificationService', () => {
  let service: UpdatenotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatenotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
