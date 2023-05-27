import { TestBed } from '@angular/core/testing';

import { AddrendezVousService } from './addrendez-vous.service';

describe('AddrendezVousService', () => {
  let service: AddrendezVousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddrendezVousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
