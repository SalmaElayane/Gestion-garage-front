import { TestBed } from '@angular/core/testing';

import { NotivicationService } from './notivication.service';

describe('NotivicationService', () => {
  let service: NotivicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotivicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
