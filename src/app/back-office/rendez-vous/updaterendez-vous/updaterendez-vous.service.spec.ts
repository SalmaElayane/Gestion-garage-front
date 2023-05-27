import { TestBed } from '@angular/core/testing';

import { UpdaterendezVousService } from './updaterendez-vous.service';

describe('UpdaterendezVousService', () => {
  let service: UpdaterendezVousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdaterendezVousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
