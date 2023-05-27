import { TestBed } from '@angular/core/testing';

import { AddvehiculesService } from './addvehicules.service';

describe('AddvehiculesService', () => {
  let service: AddvehiculesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddvehiculesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
