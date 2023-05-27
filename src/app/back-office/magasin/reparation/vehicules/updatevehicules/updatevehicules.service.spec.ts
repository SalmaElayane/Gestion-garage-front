import { TestBed } from '@angular/core/testing';

import { UpdatevehiculesService } from './updatevehicules.service';

describe('UpdatevehiculesService', () => {
  let service: UpdatevehiculesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatevehiculesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
