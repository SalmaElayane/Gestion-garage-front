import { TestBed } from '@angular/core/testing';

import { UpdatemaintenenceService } from './updatemaintenence.service';

describe('UpdatemaintenenceService', () => {
  let service: UpdatemaintenenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatemaintenenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
